# Images and fonts
images and fonts can be sourced from the public folder

```javascript
import Image from 'next/image'
import profilePic from './me.png'
```


Remote images can also be used if you provide a URL in the source proeprty
Need to suplpy a list of safe servers for fonts 

![alt text](image.png)

Fonts can be obtaine dform this 
`import { Geist } from 'next/font/google'`