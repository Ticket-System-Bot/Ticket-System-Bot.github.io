---
title: Moderation
description: Documentation regarding Moderation
---

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <code>/warn &lt;member&gt [duration] [reason] [custom_reason] [moderator_hidden]</code> | Warn a member (`moderator_hidden` hides the moderator from the actioned user)       |   False        |
| <code>/warnings [member]</code>   | View a list of warnings for a member or yourself        |     False        |
| <code>/remove_warning &lt;id&gt [notify_user=True]</code>   | Remove a warning (`notify_user` will direct message the warned member that it was deleted)        |     False        |
| <code>/delete_all_warnings</code>   | Delete **ALL** warnings from your server. This is useful if your bot is acting slow when warning users        |     <premium>True</premium>        |
| <code>/ban &lt;member&gt [reason] [custom_reason] [moderator_hidden] [delete_message_days=1]</code>   | Ban a member from the server (`delete_message_days` is the amount of message days to delete)       |     False        |
| <code>/kick &lt;member&gt [reason] [custom_reason] [moderator_hidden]</code>   | Kick a member from the server    |     False        |
| <code>/purge &lt;amount&gt</code>   | Purge an amount of messages in the current channel    |     False        |
| <code>/mute &lt;member&gt &lt;duartion&gt [reason] [custom_reason] [moderator_hidden]</code>   | Mute a member for a duration using **Discord's Timeout Feature**. (Example `duration` argument: '1h' = 1 hour)    |     False        |

:::danger
Using the `/delete_all_warnings` command **cannot be undone**!
:::

:::caution
Discord's Timeout feature only allows members to be muted with a max duration of **1 week**. If you try and mute someone for over a week, the bot will send you an error message saying you can't do that
:::