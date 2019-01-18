// Modules to control application life and create native browser window
const {app, Menu, shell, BrowserWindow} = require('electron')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false
        },
        title: '交通巡检管理平台',
        allowRunningInsecureContent: true,
        autoHideMenuBar: true,
        enableLargerThanScreen: true,
        fullscreenable: true,
        useContentSize: true,
        minWidth: 1100,
        minHeight: 500,
        width: 1250,
        height: 700
    });

    mainWindow.loadURL('http://tp.yinbin.ink/tp/login');

    //
    // try {
    //     mainWindow.webContents.debugger.attach('1.1')
    // } catch (err) {
    //     console.log('Debugger attach failed : ', err)
    // }
    //
    // mainWindow.webContents.debugger.on('detach', (event, reason) => {
    //     console.log('Debugger detached due to : ', reason)
    // })
    //
    // mainWindow.webContents.debugger.on('message', (event, method, params) => {
    //     if (method === 'Network.requestWillBeSent') {
    //         if (params.request.url === 'https://www.github.com') {
    //             mainWindow.webContents.debugger.detach()
    //         }
    //     }
    // })
    //
    // mainWindow.webContents.debugger.sendCommand('Network.enable')

    function my() {
        shell.openExternal('http://www.yinbin.ink');
    }

    /*
                {
                    type: 'separator'
                },
     */
    var template = [
        {
            label: '刷新',
            click: function () {
                mainWindow.reload();
            }
        }, {
            label: '关于',
            submenu: [
                {
                    label: '技术支持：青岛前途软件技术有限公司',
                    click: my
                },
                {
                    label: '联系人：尹彬',
                    click: my
                },
                {
                    label: '电话：15965585803',
                    click: my
                },
            ],
        }
    ];

    // 隐藏菜单
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    // mainWindow.setMenu(template);
    mainWindow.setMenuBarVisibility(false);

    // and load the index.html of the app.
    // mainWindow.loadFile('index.html');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
