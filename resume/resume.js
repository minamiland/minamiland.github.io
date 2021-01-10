jQuery(document).ready( function() {
    $.ajax({
        type : 'get',
        dataType: 'json',
        data : {},
        url : 'info.json',
        error: function(resume) {
            var str = "";
            str += jQuery('body').html("<div class='error'>불러오지 못했습니다.</div>");
        },
        success: function(resume) {
            var str, i, j, k, l, m = "";
            
            str += jQuery('#photo').append("<img src='" + resume.photo.img + "' alt='my photo'></div>");

            str += jQuery('#name').before("<h2 class='title'>" + resume.title.personal + "</h2>");

            str += jQuery('#name').append("<span class='title'>" + resume.title.name + "</span>");
            str += jQuery('#name').append("<span class='box'>" + resume.name.kr + "</span>");
            
            str += jQuery('#email').append("<span class='title'>" + resume.title.email + "</span>");
            str += jQuery('#email').append("<span class='box'>" + resume.email.data + "</span>");
            
            str += jQuery('#portfolio').append("<span class='title'>" + resume.title.portfolio + "</span>");
            str += jQuery('#portfolio').append("<span class='box'><a href='"  + resume.portfolio.data + "'>" + resume.portfolio.data + "</a></span>");
            
            str += jQuery('#education').append("<h2 class='title'>" + resume.title.education + "</h2>");
            for ( var i in resume.education ) {
                str += jQuery('#education').append("<div class='date'>" + resume.education[i].date + "</div>");
                str += jQuery('#education').append("<div class='box'>" + resume.education[i].title + "</div>");
            };
            
            str += jQuery('#career').append("<h2 class='title'>" + resume.title.career + "</h2>");
            for ( var i in resume.career ) {
                str += jQuery('#career').append("<div class='date'>" + resume.career[i].date + "</div>");
                str += jQuery('#career').append("<div class='box'>" + resume.career[i].title + "</div>");
            };
            
            str += jQuery('#record').append("<h2 class='title'>" + resume.title.record + "</h2>");
            for ( var i in resume.record ) {
                if ( jQuery('#record').hasClass('.date_box') ) {
                    str += jQuery('#record').append("<div class='error'>불러오지 못했습니다.</div>");
                } else {
                    
                    str += jQuery('#record').append(
                        "<div class='record_box'>" +
                            "<div class='date'>" +
                                "<div class='record_office_date'>" + resume.record[i].date + "</div>" +
                                "<div class='record_office_title'>" + resume.record[i].title + "</div>" +
                            "</div>" +
                        "</div>"
                    );

                    if ( resume.record[i].part !== null ) {
                        str += jQuery('#record').append(
                            "<div class='box'>" +
                                "<div class='record_office_part'>" + resume.record[i].part + "</div>" + 
                            "</div>"
                        );
                    }

                    if ( resume.record[i].description !== null ) {
                        str += jQuery('#record').append(
                            "<div class='box'>" +
                                "<div class='record_office_description'>" + resume.record[i].description + "</div>" +
                            "</div>"
                        );
                    }
                    
                    for ( var j in resume.record[i].project ) {
                        if ( resume.record[i].project[j].href == null ) {
                            str += jQuery('#record').append(
                                "<div class='project_box'>" +
                                    "<ul class='date_box'>" +
                                    "<li>" +
                                        "<span class='record_project_title'>" + resume.record[i].project[j].title + "</span>" +
                                        "<span class='record_project_part'>" + resume.record[i].project[j].part + "</span>" +
                                        "<span class='record_project_persentage'>(" + resume.record[i].project[j].persentage + ")</span>" +
                                    "</li>" +
                                    "</ul>" +
                                "</div>"
                            );
                        } else {
                            str += jQuery('#record').append(
                                "<div class='project_box'>" +
                                    "<ul class='date_box'>" +
                                    "<li>" +
                                        "<span class='record_project_title'>" + 
                                        "<a href='" + resume.record[i].project[j].href + " 'target='_blank'>" +
                                            resume.record[i].project[j].title + 
                                        "</a>" +
                                        "</span>" +
                                        "<span class='record_project_part'>" + resume.record[i].project[j].part + "</span>" +
                                        "<span class='record_project_persentage'>(" + resume.record[i].project[j].persentage + ")</span>" +
                                    "</li>" +
                                    "</ul>" +
                                "</div>"
                            );
                        }
                    }
                }
            };

            str += jQuery('#military').append("<h2 class='title'>" + resume.title.military + "</h2>");
            str += jQuery('#military').append("<div class='date'>" + resume.military.date + "</div>");
            str += jQuery('#military').append("<div class='box'>" + resume.military.title + "</div>");
            
            str += jQuery('#overseasstudy').append("<h2 class='title'>" + resume.title.overseasstudy + "</h2>");
            str += jQuery('#overseasstudy').append("<div class='date'>" + resume.overseasstudy.date + "</div>");
            str += jQuery('#overseasstudy').append("<div class='box'>" + resume.overseasstudy.title + "</div>");
            
            str += jQuery('#certificate').append("<h2 class='title'>" + resume.title.certificate + "</h2>");
            str += jQuery('#certificate').append("<div class='date'>" + resume.certificate.date + "</div>");
            str += jQuery('#certificate').append("<div class='box'>" + resume.certificate.title + "</div>");
            
            str += jQuery('#publications').append("<h2 class='title'>" + resume.title.publications + "</h2>");
            str += jQuery('#publications').append("<div class='date'>" + resume.publications.date + "</div>");
            str += jQuery('#publications').append("<div class='box'>" + resume.publications.title + "</div>");
        }
    });
});
