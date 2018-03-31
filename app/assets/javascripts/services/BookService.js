function BookService($http){

  this.httpGetAllBooks = function(){
    return $http.get('/comics.json')
  };


  this.httpGetBook = function(id){
    return $http.get('/comics/'+ id);
  };


  this.httpCreateBook = function(data) {
    var req = {
     method: 'POST',
     url: '/comics',
     data: {comic:data},
     headers: {
       'Content-Type': 'application/json'
     }
    }
    return $http(req)
    .then(successCallback)
    .catch(errorCallback)

    function successCallback(data){
      return data;
    }

    function errorCallback(error){
      console.log(error)
    }
  }


  this.updateBook = function(cover, page_attachments_attributes, id, Upload) {
    console.log("What is happening in the BookService " + page_attachments_attributes)
    Upload.upload({
        method: 'PATCH',
        url: '/pages/' + id + '/edit',
        // transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        },
        data: { cover, page_attachments_attributes }
    })
  };


  this.httpAdd = function(id){
    var req = {
     method: 'PATCH',
     url: '/comics/'+id,
     data: id
    }
    return $http(req);
  };

  this.httpUpdateBook = function(id){
    return $http.patch(`/comics/${id}`);
  };

  this.httpDeleteBook = function(id){
    return $http.delete(`/comics/${id}`);
  };


  // function Node(data){
  //   this.data = data;
  //   this.previous = previous;
  //   this.next = next;
  // }
  //
  // // this.PageContainer = function(book, number){
  //   var node = new Node(book.page_attachments[0]);
  //
  //   this.doublyLinkedPages(node) {
  //     this._length = 0;
  //     this.head = null;
  //     this.tail = null;
  //
  //     function nextPage(node){
  //       node.data+=1
  //       return node.data;
  //     }
  //
  //     function prevPage(node){
  //       node.data-=1
  //       return node.data;
  //     }
  //
  //   }

    // const pages_carousel = new DoublyLinkedPages();

    // function getFirstPage(){
    //   return this.head;
    // }

    // function getLastPage(){
    //   if (!this.head){
    //     return "There are no pages";
    //   }
    //
    //   let node = this.head;
    //   while(node){
    //     if(!node.next){
    //       return node;
    //     }
    //     node = node.next; // update the node to the next one in our chain
    //   }
    // }
    // function getPageAt(){
    //
    // }


    // }

  // }

}

angular
    .module('app')
    .service('BookService', BookService);
