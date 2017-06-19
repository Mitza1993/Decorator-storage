/**
 * Created by miordache on 6/17/17.
 */
function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyCk_6HEorrTCsC4xxXs6WzMm9u1HP3hiSk');
    gapi.client.load('plus','v1', function() {
    });
}
