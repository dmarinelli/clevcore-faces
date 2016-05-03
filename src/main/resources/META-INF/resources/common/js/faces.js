/* init */
$(document).ready(function() {
	jsf.ajax.addOnEvent(HandleAjax.init.onEvent);
	jsf.ajax.addOnError(HandleAjax.init.onError);

	window.addEventListener('jsfAjaxEvent', HandleAjax.listener);

	ConfirmNavigation.init();

	reset();

	if (browserDetect.browser == "Firefox") {
		setAttribute("html", "moznomarginboxes", "");
		setAttribute("html", "mozdisallowselectionprint", "");
	}
});