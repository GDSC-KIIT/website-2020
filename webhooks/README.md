# Webhooks

## Hapi Strapi Webhook

This webhook functions to receive _outgoing_ webhook calls from **strapi cms** and then reroutes them to _Discord Channel_ with the proper message.

#### Settings

-   Input the name of this **webhook url** in _Strapi Webhook Settings_.

-   Set **`DISCORD_URL` enviromental variable** to the correct _Discord Channel URL_ provided for its webhook.

#### Useful References

-   [Strapi Webhook Documentation](https://strapi.io/documentation/developer-docs/latest/concepts/webhooks.html)

-   [Discord Webhook Documentation](https://discord.com/developers/docs/resources/webhook)
