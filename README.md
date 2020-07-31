# odd Fancy Log

```js
import Logger from 'odd-fancy-log'

const logger = new Logger('myApp')

logger.panel('message in panel.') // panel style only render correctly in Firefox.

let payload = {
  name: 'Laptop',
  size: '16 inch',
  price: '2999',
}
logger.raw(payload)

logger.message('simple message')
```
