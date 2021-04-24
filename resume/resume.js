document.addEventListener('DOMContentLoaded', function(){
  // ==============================
  // 리스트 데이터 호출
  $.ajax({
    url: 'info.json',
    type: 'get',
    dataType: 'json'
  })
  .success(function(data) {
    // console.log('call success');
    data.forEach(function(item) {
      // ==============================
      // 각 요소들
      let jp = $('#listGroup');
      let personalInfo = $('#personalinfo');

      const titles  = '<h3>(' + item.id + ')' + item.title + '</h3>';
      const urls    = '<p><a href="' + item.url + '">' + item.url + '</a></p>';
      const inimg   = item.img ? '<p><img src="' + item.img + '"/></p>' : '';
      const inbody  = item.example ? '<p>' + item.example + '</p>' : '';
      let graphs  = ''
      const intext  = item.text ? '<p>' + item.text + '</p>' : '';
      const intext2 = item.text2 ? '<p>' + item.text2 + '</p>' : '';
      let tables  = ''
      
      let languageArea  = ''
      languageArea += '<h2 class="title">' + item.title.language + '</h2>'
      languageArea += '<ul class="language">'
      for (a in item.languages) {
        languageArea += '<li>'
        languageArea += item.languages[a].language
        languageArea += ' : '
        languageArea += item.languages[a].fluency
        languageArea += '</li>'
      }
      languageArea += '</ul>'

      let basicsArea  = ''
      basicsArea += '<h2 class="title">' + item.title.personal + '</h2>';
      basicsArea += '<ul class="basic">';
      basicsArea += '<li>' + item.basics.name + '</li>';
      basicsArea += '<li>' + item.basics.label + '</li>';
      basicsArea += item.basics.picture ? '<li>' + item.basics.picture + '</li>' : '';
      basicsArea += '<li class="email low">' + item.basics.email + '</li>';
      basicsArea += item.basics.phone ? '<li>' + item.basics.phone + '</li>' : '';
      basicsArea += '<li class="low"><a href="' + item.basics.website + '">' + item.basics.website + '</a></li>';
      basicsArea += '<li>' + item.basics.summary + '</li>';
      
      // basicsArea += '<li>'
      // basicsArea += '<span>'
      //   basicsArea += item.basics.location.postalCode;
      //   basicsArea += item.basics.location.region;
      //   basicsArea += item.basics.location.city;
      //   basicsArea += item.basics.location.address;
      //   basicsArea += item.basics.location.countryCode;
      // basicsArea += '</span>';
      // basicsArea += '</li>';
      basicsArea += '</ul>';

      let profileArea  = ''
      profileArea += '<div class="profile">';
      for (b in item.profiles) {
        profileArea += '<a href="' + item.profiles[b].url + item.profiles[b].username + '" class="low">' + item.profiles[b].network + '</a>';
      }
      profileArea += '</div>';

      let skillArea = ''
      skillArea += '<h2 class="title">' + item.title.portfolio + '</h2>'
      skillArea += '<ul>'
        skillArea += '<li>' + item.skills[0].name + '</li>'
        skillArea += '<li>' + item.skills[0].level + '</li>'
        skillArea += '<li>' + item.skills[0].keywords + '</li>'
      skillArea += '</ul>'
      
      let workArea = ''
      workArea += '<h2 class="title">' + item.title.career + '</h2>'
      workArea += '<ul class="career">'
        for (a in item.career) {
          workArea += '<li>'
          workArea += '<span class="date">' + item.career[a].date + '</span>'
          if (item.career[a].area !== null) {
            workArea += '<span class="workarea">' + item.career[a].area + '</span>'
          }
          workArea += '<span class="">' + item.career[a].title + '</span>'
          // workArea += item.career[a].reason
          workArea += '</li>'
        }
      workArea += '</ul>'
      
      let recordArea = ''
      recordArea += '<h2 class="title">' + item.title.record + ' (<span class="nowdate">1999 ~ ' + new Date().getFullYear() +'</span>)</h2>'
      recordArea += '<ul class="record">'
        for (a in item.record) {
          recordArea += '<li>'
          recordArea += '<div class="record_office_date">' + item.record[a].date + '</div>'
          recordArea += item.record[a].title ? '<p class="record_office_title">' + item.record[a].title + '</p>' : ''
          recordArea += item.record[a].part ? '<p>' + item.record[a].part + '<br>' : ''
          recordArea += item.record[a].description ?  item.record[a].description + '</p>' : ''
          if (item.record[a].project !== null) {
            recordArea += '<div class="project_box">'
            for (b in item.record[a].project) {
              recordArea += '<p>'
              recordArea += '<span class="record_project_title">' + item.record[a].project[b].title + '</span>'
              recordArea += item.record[a].project[b].date ? '<span style="display:block">' + item.record[a].project[b].date + '</span>' : ''
              recordArea += item.record[a].project[b].href ? item.record[a].project[b].href + ' / ' : ''
              if (item.record[a].project !== null) {
                recordArea += '<span class="record_project_part">'
                if (item.record[a].project[b].subproject !== null) {
                  for (c in item.record[a].project[b].subproject) {
                    recordArea += '<span style="display:block;width:100%" class="sub_record_project_part">'
                    recordArea += item.record[a].project[b].subproject[c].part
                    recordArea += ' (' + item.record[a].project[b].subproject[c].persentage + ')'
                    recordArea += '</span>'
                  }
                } else {
                  recordArea += item.record[a].project[b].part
                  recordArea += ' (' + item.record[a].project[b].persentage + ')'
                }
                recordArea += '</span>'
              }
              recordArea += '</p>'
            }
            recordArea += '</div>'
          } else {}
          recordArea += '</span>'
        }
      recordArea += '</ul>'

      let militaryArea = ''
      militaryArea += '<h2 class="title">' + item.title.military + '</h2>'
      militaryArea += '<ul class="career">'
        militaryArea += '<li>'
        militaryArea += '<span class="date">' + item.military.date + '</span>'
        militaryArea += '<span class="box">' + item.military.title + '</span>'
        militaryArea += '</li>'
      militaryArea += '</ul>'
      
      let overseasstudyArea = ''
      overseasstudyArea += '<h2 class="title">' + item.title.overseasstudy + '</h2>'
      overseasstudyArea += '<ul class="career">'
        overseasstudyArea += '<li>'
        overseasstudyArea += '<span class="date">' + item.overseasstudy.date + '</span>'
        overseasstudyArea += '<span class="workarea">' + item.overseasstudy.area + '</span>'
        overseasstudyArea += '<span class="">' + item.overseasstudy.title + '</span>'
        overseasstudyArea += '</li>'
      overseasstudyArea += '</ul>'
      
      let certificateArea = ''
      certificateArea += '<h2 class="title">' + item.title.certificate + '</h2>'
      certificateArea += '<ul class="career">'
        certificateArea += '<li>'
        certificateArea += '<span class="date">' + item.certificate.date + '</span>'
        certificateArea += '<span class="box">' + item.certificate.title + '</span>'
        certificateArea += '</li>'
      certificateArea += '</ul>'
      
      let publicationsArea = ''
      publicationsArea += '<h2 class="title">' + item.title.publications + '</h2>'
      publicationsArea += '<ul class="career">'
        publicationsArea += '<li>'
        publicationsArea += '<span class="date">' + item.publications.date + '</span>'
        publicationsArea += '<span class="box">' + item.publications.title + '</span>'
        publicationsArea += '</li>'
      publicationsArea += '</ul>'
      
      let educationArea = ''
      educationArea += '<h2 class="title">' + item.title.education + '</h2>'
      educationArea += '<ul class="career">'
        for (a in item.education) {
          educationArea += '<li>'
          educationArea += '<span class="date">' + item.education[a].date + '</span>'
          educationArea += '<span class="workarea">' + item.education[a].area + '</span>'
          educationArea += '<span class="">' + item.education[a].title + '</span>'
          educationArea += '</li>'
        }
      educationArea += '</ul>'
      
      // ==============================
      // 그래프 영역
      //let graphs = '';
      if (graphs !== null) {
        for (a in item.graph) {
          graphs += '<div class="graph-box">';
          graphs += '<ul class="graph-list">';
          for (b in item.graph) {
            graphs += '<li>';
            graphs += '<b>' + item.graph[a].lists[b].title + '</b>';
            graphs += '<span style="background:' + item.graph[a].lists[b].bgcolor + ';width:' + item.graph[a].lists[b].line + '%"></span>';
            graphs += '</li>';
          }
          graphs += '</ul>';

          // 그래프
          if (item.graph[a].graphtitle !== null) {
            graphs += '<span class="graph-caption">';
            for (c in item.graph[a].graphtitle) {
              graphs += item.graph[a].graphtitle[c];
            }
            graphs += '</span>';
          }
          graphs += '</div>';
        }
      }

      // ==============================
      // 테이블 영역
      //let tables = '';
      if (tables !== null) {
        for (j in item.table) {
          tables += '<table class="tabletable">'
          tables += '<colgroup><col style="width:30%"><col style="width:70%"></colgroup>'
          tables += '<thead><tr><th colspan="2">' + item.table[j].title + '</th></tr></thead><tbody>'
          for (k in item.table[j].tabledata) {
            tables += '<tr>'
            tables += '<td>' + item.table[j].tabledata[k].tableth + '</td>'
            tables += '<td>' + item.table[j].tabledata[k].tabletd + '</td>'
            tables += '</tr>'
          }
          tables += '</tbody></table>'

          const tablelist = document.querySelectorAll('.table-list li')

          if (item.table[j].tablecaption !== null) {
            tables += '<ul>'
            for (f in item.table[j].tablecaption) {
              tables += '<li><span>&#8251;</span>' + item.table[j].tablecaption[f] + '</li>'
            }
            tables += '</ul>'
          }
        }
      }

      // ==============================
      // 리스트 영역
      personalInfo.append('<div id="wrapper">'
        + basicsArea
        + profileArea
        // + languageArea
        + skillArea
        + educationArea
        + overseasstudyArea
        + workArea
        + recordArea
        + militaryArea
        + certificateArea
        + publicationsArea
      + '</div>')

      // jp.append('<li class="list-item">'
      //   + '<div data-userid=' + item.id + '>'
      //     + titles
      //     + urls
      //     + inimg
      //     + inbody
      //     + graphs
      //     + intext
      //     + intext2
      //     + tables
      //   + '</div></li>'
      // )
    })
  })
  .complete(function() {
    // console.log('call complete');
  })
  .error(function() {
    // console.log('error');
  })
  .fail(function() {
    // console.log('fail');
  })
})
