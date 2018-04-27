start();
function initialize() {
    $.post("http://127.0.0.1:5000/getProfile",
        {},
        function (data, status) {


            if (data.success) {
                cronstart(data);
            }
            else {
                console.log("false");
            }

        });
}
function start() {
    initialize();
    var refreshId = setInterval(function () {

        $.post("http://127.0.0.1:5000/getProfile",
            {},
            function (data, status) {


                if (data.success) {


                    cronstart(data);

                }
                else {
                    console.log('false');
                }

            });

    }, 10000);
}

function cronstart(data) {


    linkedin = 'https://www.linkedin.com' + data.result;

    popupWindow = window.open(linkedin, 'popup', "width=600,height=600");
    if (popupWindow.document.getElementsByClassName('mn-heathrow-toast__icon--success')) {

        if (popupWindow.document.getElementsByClassName('pv-s-profile-actions__overflow-toggle pv-top-card-section__inline-overflow-button button-secondary-large-muted mh1')[0]) {
            popupWindow.document.getElementsByClassName('pv-s-profile-actions__overflow-toggle pv-top-card-section__inline-overflow-button button-secondary-large-muted mh1')[0].click();
            if (popupWindow.document.getElementsByClassName('pv-s-profile-actions pv-s-profile-actions--connect pv-s-profile-actions__overflow-button full-width text-align-left')[0]) {
                popupWindow.document.getElementsByClassName('pv-s-profile-actions pv-s-profile-actions--connect pv-s-profile-actions__overflow-button full-width text-align-left')[0].click();

                update(popupWindow, data);
            }
        } else {
            if (popupWindow.document.getElementsByClassName('pv-s-profile-actions pv-s-profile-actions--connect button-primary-large mr2')[0]) {
                popupWindow.document.getElementsByClassName('pv-s-profile-actions pv-s-profile-actions--connect button-primary-large mr2')[0].click();

                update(popupWindow, data)
            }
        }

    }
}


function update(popupWindow, data) {
    console.log('test' + data);
    if (popupWindow.document.getElementsByClassName('button-secondary-large mr1')[0]) {
        popupWindow.document.getElementsByClassName('button-secondary-large mr1')[0].click();


        if (popupWindow.document.getElementsByClassName('send-invite__custom-message mb3 ember-text-area ember-view')[0]) {
            popupWindow.document.getElementsByClassName('send-invite__custom-message mb3 ember-text-area ember-view')[0].value = "How are you";

            if (popupWindow.document.getElementsByClassName('button-primary-large ml1')[0]) {
                popupWindow.document.getElementsByClassName('button-primary-large ml1')[0].click();

                $.post("http://127.0.0.1:5000/setProfile",
                    {

                        link: data.result
                    },
                    function (data, status) {


                        if (data.success) {
                            console.log('true');

                        }
                        else {
                            console.log('false');

                        }


                    });

            }

        }

    }

}