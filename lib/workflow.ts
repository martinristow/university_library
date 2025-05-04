import {Client} from "@upstash/workflow";
import config from "@/lib/config";

export const workflowClient = new Client({
    baseUrl: config.env.upStash.qstashUrl,
    token: config.env.upStash.qstashToken,
})