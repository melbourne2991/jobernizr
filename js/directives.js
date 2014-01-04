var jobernizeDirectives = angular.module('jobernizeDirectives', []);

jobernizeDirectives.directive('viewLargeContent', function() {
	return {
		scope: {
				content: '=content'
		},
		link: function (scope, el, attrs) {

			el.on('click', function() {
				angular.element('.main_container').append('<div class="dimmer"></div>');
				angular.element('.main_container').append('<div class="large-content">' + scope.content + '</div>');

				var view_frame = angular.element('.view-frame');
				var main_container = angular.element('.main_container');
				var content_container = angular.element('.large-content');

				// content_container.css({ marginTop: (content_container.height()/-2), width: view_frame.width(), marginLeft: (view_frame.width()/-2) })
				content_container.css({ height: (0.8*main_container.height()), width: view_frame.width(), marginLeft: (view_frame.width()/-2)  })

			});
			
		}
	}
});