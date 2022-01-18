OutFile "chromium-installer.exe"

InstallDir "$PROGRAMFILES64\Chromium"

SetCompress off

Section

CreateDirectory $INSTDIR
WriteUninstaller $INSTDIR\uninstaller.exe
SetOutPath $INSTDIR
File /r "..\chromium\*.*"


CreateDirectory "$SMPROGRAMS\Google"
CreateShortcut "$SMPROGRAMS\Google\Chromium.lnk" "$INSTDIR\chrome.exe"

SectionEnd

Section "Uninstall"

Delete $INSTDIR\uninstaller.exe
Delete "$SMPROGRAMS\Google\Chromium.lnk"

RMDir /r $INSTDIR

SectionEnd