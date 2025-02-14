import { Injectable, Logger } from '@nestjs/common'
import { PlaywrightCrawler } from 'crawlee'
@Injectable()
export class AppService {
  constructor() {}
  async getHello() {
    const crawler = new PlaywrightCrawler({
      async requestHandler({ page }) {
        const title = await page.title()
        const containers = page.$$('.list--galleryWrapper--29HRJT4')

        Logger.debug(`Getting title ${title}`)
        Logger.debug('containers ', containers)
      },
      headless: false,
      maxRequestsPerCrawl: 1,
    })

    await crawler.run([
      'https://es.aliexpress.com/w/wholesale-air-express.html',
    ])
  }
}
