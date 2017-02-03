function NewBookController(BookService, regions, genres, $scope, Upload, $http) {
  var vm = this;
  vm.regions = regions.data;
  vm.genres = genres.data;
  vm.book = {
       title: '',
       description: '',
       issue:'',
       volume:'',
       page_count:'',
       issue_date:'',
       graphic_novel:'',
       region_id: null,
       genre_ids: [],
       pages: []
  };

  vm.createBook = function() {
     BookService
       //  before submit form
       .httpCreateBook(vm.book)
         .then(function (res) {
           var arr=[];
              for(let i=0; i < res.data.comic.pages.length; i++){
                arr.push(res.data.comic.pages[i].url);
              };
              vm.upload = arr;
              console.log(res);
              $('ul').prepend("<li>You have successfully created a new comic!</li>");
         },function(error){
               console.log(error)
               $('ul').append("<li>Looks like You are are missing something!</li>");
         })
   }
}

angular
        .module('app')
        .controller('NewBookController', NewBookController);

        // def decode_base64
        //   # decode base64 string
        //   Rails.logger.info 'decoding base64 file'
        //   decoded_data = Base64.decode64( params[:comic][:pages][:base64])
        //   # create 'file' understandable by Paperclip
        //   data = StringIO.new(decoded_data)
        //   data.class_eval do
        //     attr_accessor :content_type, :original_filename
        //   end
        //
        //   # set file properties
        //   data.content_type = params[:comic][:pages][:filetype] ##<StringIO:0x007f9be40a1d88>
        //   data.original_filename = params[:comic][:pages][:filename]
        //   binding.pry
        //
        //   # return data to be used as the attachment file (paperclip)
        //   data ##<StringIO:0x007fc91718b590 @content_type="image/jpeg", @original_filename="lenn.jpg">
        // end
        // # save resource and render response ...
        // id: nil,
        //    title: "sdkjsndn",
        //    description: "sl;dkskjdsdjks",
        //    issue: 2,
        //    volume: 2,
        //    page_count: 1,
        //    issue_date: Mon, 02 Jan 2017,
        //    graphic_novel: true,
        //    created_at: nil,
        //    updated_at: nil,
        //    region_id: 3,
        //    pages_file_name: "maxresdefault.jpg",
        //    pages_content_type: "image/jpeg",
        //    pages_file_size: 73600,
        //    pages_updated_at: Mon, 30 Jan 2017 03:25:08 UTC +00:00>,
        //  @interpolator=Paperclip::Interpolations,
        //  @name=:pages,
        //  @name_string="pages",
        //  @normalized_styles=
        //   {:large=>#<Paperclip::Style:0x007fc930f37950 @attachment=#<Paperclip::Attachment:0x007fc90c451960 ...>, @format=nil, @geometry="1000x1000>", @name=:large, @other_args={}>,
        //    :medium=>#<Paperclip::Style:0x007fc930f378d8 @attachment=#<Paperclip::Attachment:0x007fc90c451960 ...>, @format=nil, @geometry="300x300>", @name=:medium, @other_args={}>,
        //    :thumb=>#<Paperclip::Style:0x007fc930f37860 @attachment=#<Paperclip::Attachment:0x007fc90c451960 ...>, @format=nil, @geometry="150x150#", @name=:thumb, @other_args={}>},
        //  @options=
        //   {:convert_options=>{},
        //    :default_style=>:thumb,
        //    :default_url=>"/images/:style/cover.png",
        //    :escape_url=>true,
        //    :restricted_characters=>/[&$+,\/:;=?@<>\[\]\{\}\|\\\^~%# ]/,
        //    :filename_cleaner=>nil,
        //    :hash_data=>":class/:attachment/:id/:style/:updated_at",
        //    :hash_digest=>"SHA1",
        //    :interpolator=>Paperclip::Interpolations,
        //    :only_process=>[],
        //    :path=>":rails_root/public:url",
        //    :preserve_files=>false,
        //    :processors=>[:thumbnail],
        //    :source_file_options=>{},
        //    :storage=>:filesystem,
        //    :styles=>{:large=>"1000x1000>", :medium=>"300x300>", :thumb=>"150x150#"},
        //    :url=>"/system/:class/:attachment/:id_partition/:style/:filename",
        //    :url_generator=>Paperclip::UrlGenerator,
        //    :use_default_time_zone=>true,
        //    :use_timestamp=>true,
        //    :whiny=>true,
        //    :validate_media_type=>true,
        //    :check_validity_before_processing=>true},
