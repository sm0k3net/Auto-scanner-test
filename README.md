# Pentest Automation

## Запуск

1. Установите Docker и Docker Compose.
2. Настройте `backend/src/config/config.json` (API-ключи, SMTP).
3. Соберите и запустите:
   ```
   docker-compose -f docker/docker-compose.yml up --build
   ```
4. Откройте http://localhost:8080

## Возможности

- Разведка (nmap, sublist3r, dnsrecon, gobuster, whois, Shodan)
- Сканирование уязвимостей (OWASP ZAP, WPScan, nmap, VirusTotal)
- Поиск эксплойтов (searchsploit)
- Отчетность (HTML, CSV, XML)
- Интеграции (SMTP, Slack, Telegram)
- Аутентификация, проекты, роли

## Рекомендации

- Добавить RBAC, очереди задач, расширить аналитику, интеграцию с Burp Suite, Metasploit, Nessus.
- Улучшить интерфейс, добавить прогресс-бары, уведомления.