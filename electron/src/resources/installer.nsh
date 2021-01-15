!macro preInit
  SetRegView 64
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$PROGRAMFILES64\Watchtower\${PRODUCT_NAME}"
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$PROGRAMFILES64\Watchtower\${PRODUCT_NAME}"
  SetRegView 32
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$PROGRAMFILES\Watchtower\${PRODUCT_NAME}"
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$PROGRAMFILES\Watchtower\${PRODUCT_NAME}"
!macroend

!macro customInstall
  WriteRegStr HKLM "SOFTWARE\WOW6432Node\Watchtower\${PRODUCT_NAME}" "DisplayVersion" "${VERSION}"
!macroend

!macro customUnInstall
  DeleteRegKey HKLM "SOFTWARE\WOW6432Node\Watchtower\${PRODUCT_NAME}"
!macroend