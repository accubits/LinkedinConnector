

url="https://www.linkedin.com/search/results/content/?keywords=ico&origin=SWITCH_SEARCH_VERTICAL";
start(url);



function start(url) {

    popupWindow = window.open(url,'popup' , "width=600,height=600");
    link_iterator=0;
link_profile_count=0;
    setInterval(function () {

    no_of_comment=popupWindow.document.getElementsByClassName('feed-shared-social-counts__num-comments feed-shared-social-counts__count-value Sans-13px-black-55% hoverable-link-text').length;
    load_more=100;
    iterator=0;
    if(no_of_comment>0)
    {
        popupWindow.document.getElementsByClassName('feed-shared-social-counts__num-comments feed-shared-social-counts__count-value Sans-13px-black-55% hoverable-link-text')[iterator].click();
        if(popupWindow.document.getElementsByClassName('hoverable-link-text button feed-shared-comments-list__show-previous-button Sans-13px-black-55%')[iterator]) {
            popupWindow.document.getElementsByClassName('hoverable-link-text button feed-shared-comments-list__show-previous-button Sans-13px-black-55%')[iterator].click();
        }
        load_more=popupWindow.document.getElementsByClassName('hoverable-link-text button feed-shared-comments-list__show-previous-button Sans-13px-black-55%').length;
        iterator=no_of_comment-load_more;
        if(document.getElementsByClassName('feed-shared-comments-list ember-view feed-shared-comments-list')[iterator]) {
            link_profile_count = document.getElementsByClassName('feed-shared-comments-list ember-view feed-shared-comments-list')[iterator].getElementsByTagName('article').length;
        }
            link_iterator=0;

    }

    },100);


    iterdata=0;
    var refreshId=setInterval(function () {
        popupWindow.scrollBy(0,100);

        if(popupWindow.document.getElementsByClassName('feed-shared-post-meta__profile-link Sans-17px-black-85%-semibold tap-target ember-view')[iterdata]) {
            link = popupWindow.document.getElementsByClassName('feed-shared-post-meta__profile-link Sans-17px-black-85%-semibold tap-target ember-view')[iterdata].getAttribute('href');

            $.post("http://127.0.0.1:5000/addProfile",
                            {
                                link:link

                            },
                            function (data, status) {


                                if (data.success) {
                                    console.log("true");
                                }
                                else {
                                    console.log("false");
                                }

                            });
            iterdata++;
        }
     },100);

}