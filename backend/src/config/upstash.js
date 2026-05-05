import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

export const 
{UPSTASH_REDIS_REST_URL,
 UPSTASH_REDIS_REST_TOKEN
} = dotenv.config().parsed;

// 10 requests per 20 seconds per user
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "2 m"),
});

export default ratelimit;