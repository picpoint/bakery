работа с smart-grid
1) Устанавливаем smart-grid  npm i smart-grid -D
2) подключить в gulpfile var smartgrid = require('smart-grid');
3) прописываем breakpoint-ы в gulpfile

const smartGrigConf = {
		outputStyle: 'less',
		colums: 12,
		offset: '30px',   // межклоночник
		mobileFirst: false,
		container: {
				maxWidth: '1280px',
				fields: '30px'   // отступ от края экрана
		},
		breakPoints: {
			xl: {
				width: '1140px',
				fields: '30px'
			},
			lg: {
				width: '960px',
				fields: '30px'
			},
			md: {
				width: '720px',
				fields: '20px'
			},
			sm: {
				width: '540px',
				fields: '10px'
			},
			xs: {
				width: '480px',
				fields: '5px'
			}
		}
};



4) прописываем вызов в gulpfile

gulp.task('grid', function () {
		smartgrid(settings.root + '/less', smartGrigConf);
});

5) вызываем gulp grid
