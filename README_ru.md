# Hardhat Minimal Setup project

Я создал этот проект как напоминалку или, если угодно, шаблон для последующих проектов.

Этот проект использует и готов для настройки следующих плагинов:

* [solidity-coverage](https://www.npmjs.com/package/solidity-coverage) - покрытие кода контрактов тестами
* [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter) - оценка затрат газа, использует CoinMarketCap для получения цен
* [hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan) - для верификации контрактов на Etherscan/Bscscan/итд

Также в `hardhat.config.json` я добавил настройку работы с актуальной тестовой сетью Goerli используя сервис Alchemy.

**ВНИМАНИЕ: скопировать `.env.example` в `.env`!**

# Создание проекта

Были использованы следующие команды:

```console
mkdir {project}
cd {project}
npm init
npm install --save-dev hardhat
npx hardhat
```

# Типичные команды при работе с проектом

## Компиляция

```console
npx hardhat clean && npx hardhat compile
```

## Запуск тестов, проверка покрытия кода тестами

```console
npx hardhat test [--grep text]
REPORT_GAS=true npx hardhat test
npx hardhat coverage
```

В коде тестов можно добавить `.only` к `it`, чтобы выполнить конкретный тест, либо использовать `grep` в консоли при вызове тестов.

## Задачи

Код задач находится в папке `tasks`, пример запуска находится в коде.

## Запуск локальной ноды и разворачивание на ней контракта

```
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

## Запуск локальной ноды в режиме форка

В файле `.env.example` требуется прописать `ALCHEMY_FORK_API_KEY`

```
npx hardhat node --config hardhat-fork.config.js
```

## Верификация кода контракта на Etherscan

```console
npx hardhat verify --network goerli {contractAddress}
```

## Command line completion

Для удобства, чтобы не писать `npx hardhat` и автоматически подставлялись команды, можно поставить:

```console
sudo npm install --global hardhat-shorthand
hardhat-completion install
```

Теперь можно набирать команды следующим образом добивая их TAB-ом:

```console
> hh te[press TAB]
> hh test
```