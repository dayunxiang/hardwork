  //tab
  function tabcount(eleid, activeclass, subareatabcontent) {
      $(eleid + ' li').click(function() {
          var index = $(this).index();
          $(this).find('a').addClass(activeclass);
          $(this).siblings('li').find("a").removeClass(activeclass)
          $(subareatabcontent).eq(index).show().siblings(subareatabcontent).hide();
          myChart.resize(); //关键步骤
          myChart.setOption(option, true);
          jibenChart.resize(); //关键步骤
          jibenChart.setOption(option, true);
          yejChart.resize(); //关键步骤
          yejChart.setOption(option, true);
      })
  }
