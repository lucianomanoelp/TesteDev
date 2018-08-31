# TesteDev

A instalação do app considera que já tenha o ambiente React Native instalado na sua máquina, assim como Xcode para IOS, Android Studio para Android e seus respectivos SDK's.

### Baixando as dependências

Pelo terminal, dentro do diretório do projeto execute e comando.

`yarn install`

### Executando no simulador IOS pelo terminal

`react-native run-ios`

Este comando complilará o projeto, abrirá o simulador default e subirá a aplicação no simulador. Se preferir especificar um simulador execute, por exemplo: 

`react-native run-ios --simulator="iPhone 8"`

### Executando no simulador IOS pelo xcode

Dentro do diretório do projeto entre no diretório ios e execute o arquivo TesteDev.xcodeproj. O projeto será aberto dentro do Xcode. Então selecione um simulador e clique no botão "RUN".

### Executando em dispositivo físico IOS pelo xcode

Parecido com o passo anterior, com a diferença de ao invés de selecionar um simulador selecione seu iPhone conectado por USB ao mac.

### Executando no simulador android

1. Execute o Android Studio. 
2. Escolha a opção abrir um projeto existente.
3. Dentro do diretório do projeto selecione o diretório android.
4. Execute a versão do simulador instalado.
5. Clique em "Run".

### Executando no dispositivo físico android

1. Conecte o dispositivo no computador e habilite a opção de desenvolvdor no android.
2. Execute o Android Studio. 
3. Escolha a opção abrir um projeto existente.
4. Dentro do diretório do projeto selecione o diretório android.
5. Clique em "Run".
