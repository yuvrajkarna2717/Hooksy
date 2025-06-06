# GitWhistle
> Real-time GitHub notifications across Discord, Slack, and Telegram.

## 📢 What is Hooksy?

Hooksy is a powerful webhook notification service that bridges GitHub repository events with popular chat platforms. Stay instantly informed about repository activities wherever your team communicates.

## ✨ Key Features

- **Multi-Platform Support**: Seamlessly deliver notifications to Discord, Slack, and Telegram
- **Real-Time Alerts**: Receive instant updates on repository activities
- **Smart Formatting**: Automatically transform GitHub events into readable, platform-optimized messages
- **Event Coverage**: Track pushes, pull requests, issues, comments, and more
- **Extensible Design**: Easily add support for additional platforms with minimal code changes

## 🚀 Why Choose Hooksy?

- **Streamline communication** by consolidating GitHub updates into your team's chat environments
- **Avoid missing critical repo activities** without constantly monitoring GitHub
- **Save development time** by automating alerting workflows tailored to your team's needs

## 🔧 Supported GitHub Events

| Event Type | Details Included |
|------------|------------------|
| **Push Events** | Branch name, commit count, author, commit messages |
| **Pull Requests** | Action (opened/closed/merged), title, author, target branch |
| **Issues** | Action (opened/closed), title, author, description |
| **Comments** | Author, content snippet, related PR/issue |

## 🔄 How It Works

1. GitHub sends webhook payloads to Hooksy when repository events occur
2. Hooksy parses the payload to extract relevant information
3. Platform-specific formatters create optimized messages for each destination
4. Notifications are dispatched concurrently to all configured platforms
5. Your team stays informed without switching context

## 🔮 Future Extensions
- Repository-to-channel mapping for targeted notifications
- Support for Microsoft Teams, WhatsApp, and Email
- Custom message templates and filtering options
- Web dashboard for configuration and monitoring
- Event analytics and notification history



## 📋 Getting Started

Check our [documentation](https://github.com/yuvrajkarna2717/hooksy) for detailed setup instructions and configuration options.

## 📜 License

MIT License © 2025 Yuvraj Karna

---

**Hooksy**: _Keep your finger on the pulse of your repositories_
