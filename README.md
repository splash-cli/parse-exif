# parse-exif
> Parse unsplash exif

## Install
```sh
	$ npm install @splash-cli/parse-exif --save

	#or

	$ yarn add @splash-cli/parse-exif
```

## Usage
```js
	import printBlock from '@splash-cli/parse-exif';

	parseExif(data) //=> { model: '...' }
```

## Api
### parseExif(source)
Returns unsplash parsed exif (Object)

#### source
Type: `Object`
Unsplash Api exif

## License
MIT © [Federico Vitale](https://federicovitale.me)