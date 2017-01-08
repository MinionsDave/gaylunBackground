export class Visit {
    constructor(
        ip: String,
        category: String,
        platform: String,
        visitTime: String,
        userAgent: String,
        isEngineSpider: Boolean, // 是否为搜索引擎爬虫
        country: String,
        area: String, // 地区
        region: String, // 省份
        city: String,
        county: String, // 区
        isp: String,
    ) {}
}
