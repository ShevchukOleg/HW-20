/**
 * SearchPanel -  графическое оформление ответа сервера
 */
export class SearchPanel {
  constructor(){
    this._searchResult = document.querySelector("div.search-result");
  }
   /**
    * clearPanel -  очистка темплейта и управление видимостью
    */
    clearPanel() {
      const panel = document.querySelector("div.search-result");
      this._searchResult.innerHTML = '';
      if(panel.classList.contains('d-none') && document.querySelector("input.form-control").value.length >2) {
         panel.classList.toggle('d-none')
      }

    }
    /**
     * setSearchingUserInfo - вставка данных о пользователях в темплейты
     * @param {*} param0 
     */
    setSearchingUserInfo({full_name, city, avatar }) {
      const template = SearchPanel._searchingTemplate(full_name, city, avatar);
      this._searchResult.insertAdjacentHTML("afterbegin", template);
    }
    /**
     * noUserMassege *  вывод сообщения о безуспешном поиске
     */
    noUserMassege(){
      this._searchResult.insertAdjacentHTML("afterbegin", SearchPanel._noUserTemplate())
    }
    //Templates

   static _searchingTemplate(full_name, city, avatar ){
      return `
      <div class="owner-info d-flex align-items-center">
         <div class="owner-avatar">
               <img src="${avatar}" alt="userFoto">                          
         </div>
         <!-- /.owner-avatar -->
         <div class="d-flex flex-column user-properties">
               <span class="font-weight-bold searchinUserName">${full_name}</span>
               <span class="searchingUserCity">${city}</span>
         </div>
      </div>
      `
    };

    static _noUserTemplate(){
      return `
      <div class="d-flex flex-column user-properties">
        <span class="font-weight-bold searchinUserName">Пользователя с указанным именем не найдено.</span>
      </div>
      `
    };
}