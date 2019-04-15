работа с smart-grid
1) Óñòàíàâëèâàåì smart-grid  npm i smart-grid -D
2) ïîäêëþ÷èòü â gulpfile var smartgrid = require('smart-grid');
3) ïðîïèñûâàåì breakpoint-û â gulpfile

const smartGrigConf = {
		outputStyle: 'less',
		colums: 12,
		offset: '30px',   // ìåæêëîíî÷íèê
		mobileFirst: false,
		container: {
				maxWidth: '1280px',
				fields: '30px'   // îòñòóï îò êðàÿ ýêðàíà
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



4) ïðîïèñûâàåì âûçîâ â gulpfile

gulp.task('grid', function () {
		smartgrid(settings.root + '/less', smartGrigConf);
});

5) âûçûâàåì gulp grid
