const years = {
  2016:[],
  2015:[],
  2014:[],
  2013:[],
  2012:[],
  2011:[],
  2010:[],
  2009:[],
  2008:[],
  2007:[407],
};

$(() => {
  for (let key in years) {
      $("#chooseYear").append(`<option id="y_${years[key]}">${years[key]}年度</option>`);
      $(`#y_${years[key]}`).click(() => {
        for (let i = 0; i < years[key].length; i++) {
          $('#contents').append(`<a href='./${}'></a>`);      
        }
      });
  }
  	$("#hoge").click(() => {
		$("#hogehoge").html("clicked!!");
    // $("#hogehoge").html("appended");
	});
});

// let is = function(){
//
// }
// let is = () => {
//
// }
