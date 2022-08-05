<p align="middle" >
  <img width="200px;" src="https://user-images.githubusercontent.com/50367798/106415730-2645a280-6493-11eb-876c-ef7172652261.png"/>
</p>
<h2 align="middle">level1 - 자동차 경주 게임</h2>
<p align="middle">자바스크립트로 구현 하는 자동차 경주 게임</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-racingcar/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-racingcar/blob/main/LICENSE) licensed.

<br>

## 📈 Commit Unit

- 기본적인 UI 작성
- UX 반영
- 경주 이벤트 로직
- Loader 이벤트 로직

-- 리팩토링

- eslint, prettier setting
- cypress 테스트 코드 작성
  - 테스트 : 적절한 자동차 이름을 입력 후 '확인'을 클릭하기 까지의 로직을 확인한다.
    - 예외 : 이름을 입력하지 않으면 안 됨.
    - 예외 : 이름이 다섯글자를 넘어가면 안 됨.
    - 예외 : 이름이 중복되면 안 됨.
  - 테스트 : 적절한 게임횟수를 입력 후 '확인'을 클릭하기 까지의 로직을 확인한다.
    - 예외 : 게임횟수를 입력하지 않으면 안 됨.
    - 예외 : 게임횟수가 0 이하의 수 이면 안 됨.
    - 예외 : 게임횟수가 정수가 아니면 안 됨.
  - 테스트 : 전진조건 값의 출력이 제대로 이루어지는지 확인.
    - 예외 : 0에서 9 사이의 범위를 이탈하는 무작위 값 나온다.
- 리팩토링
  - class형 컴포넌트로 재구성 및 적절한 내부인자 보호 처리
    - carNameInput Logic
    - gameCountInput Logic
    - game Logic
    - reGame Logic
- Netlify 배포
