(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(t,e,r){"use strict";r.r(e);var a=r(25),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"when-and-what-kexts-to-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#when-and-what-kexts-to-use"}},[t._v("#")]),t._v(" When and what kexts to use")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#broadcom"}},[t._v("Broadcom")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#intel"}},[t._v("Intel")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#atheros"}},[t._v("Atheros")])])]),t._v(" "),r("h2",{attrs:{id:"broadcom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#broadcom"}},[t._v("#")]),t._v(" Broadcom")]),t._v(" "),r("h3",{attrs:{id:"airportbrcmfixup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airportbrcmfixup"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirportBrcmFixup"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("This is needed to fix wifi on many Broadcom cards, while not all of them need them it's generally required when using non-apple manufactured wireless cards. This also has the added functionality of injecting old Broadcom kexts into newer versions of macOS.")]),t._v(" "),r("p",[t._v("Note:")]),t._v(" "),r("ul",[r("li",[t._v("Apple Airport and Fenvi cards do not need this kext")])]),t._v(" "),r("h3",{attrs:{id:"brcmpatchram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#brcmpatchram"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("BrcmPatchRAM"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Required for all non-apple manufactured wireless cards due to how Firmware is handled. This is actually a bundle of multiple kexts:")]),t._v(" "),r("ul",[r("li",[t._v("BrcmBluetoothInjector")]),t._v(" "),r("li",[t._v("BrcmFirmwareData")]),t._v(" "),r("li",[t._v("BrcmPatchRAM fix:\n"),r("ul",[r("li",[t._v("BrcmPatchRAM3 for 10.14+ (must be paired with BrcmBluetoothInjector)")]),t._v(" "),r("li",[t._v("BrcmPatchRAM2 for 10.11-10.14")]),t._v(" "),r("li",[t._v("BrcmPatchRAM for 10.10 or older")])])])]),t._v(" "),r("p",[t._v("Note:")]),t._v(" "),r("ul",[r("li",[t._v("Apple Airport and Fenvi cards do not need these kexts")]),t._v(" "),r("li",[t._v("OpenCore order is alphabetical: Injector -> Data -> RAM")])]),t._v(" "),r("h2",{attrs:{id:"intel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intel"}},[t._v("#")]),t._v(" Intel")]),t._v(" "),r("h3",{attrs:{id:"itlwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#itlwm"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm",target:"_blank",rel:"noopener noreferrer"}},[t._v("itlwm"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Currently does connect and even support Apple's own IO80211 framework(via AirportItlwm), unfortunately doesn't support Airdrop, see here for features and limitations: "),r("a",{attrs:{href:"https://openintelwireless.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenIntelWireless"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"intelbluetoothfirmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intelbluetoothfirmware"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelBluetoothFirmware"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Adds Bluetooth support to macOS when paired with an Intel wireless card")]),t._v(" "),r("h2",{attrs:{id:"atheros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#atheros"}},[t._v("#")]),t._v(" Atheros")]),t._v(" "),r("h3",{attrs:{id:"airportatheros40"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airportatheros40"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/khronokernel/Wifi-Buyers-Guide/blob/master/AirPortAtheros40.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("AirPortAtheros40"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("This kext is required for all Atheros chipsets that had support dropped in Mojave, these include:")]),t._v(" "),r("ul",[r("li",[t._v("AR9285")]),t._v(" "),r("li",[t._v("AR9287")]),t._v(" "),r("li",[t._v("AR9280")]),t._v(" "),r("li",[t._v("AR9380")])]),t._v(" "),r("p",[t._v("To install the AirPortAtheros40, you have 2 methods:")]),t._v(" "),r("ul",[r("li",[t._v("Kext injection via bootloader")]),t._v(" "),r("li",[t._v("Installation into macOS(Library/Extensions)")])]),t._v(" "),r("p",[t._v("The first method is recommended, the second should be avoided but may work better for some users. "),r("strong",[t._v("Test injection first")])]),t._v(" "),r("p",[t._v("For macOS installation:")]),t._v(" "),r("p",[t._v("You'll need to copy it to Library/Extensions("),r("strong",[t._v("NOT")]),t._v(" System/Library/Extensions) and then run the following command:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo chown -R root:wheel /L*/E*; sudo chmod -R 755 /L*/E*; sudo kextcache -i /\n")])])]),r("p",[r("strong",[t._v("Catalina users note")]),t._v(": These methods no longer works without backporting the entire IO80211 framework, this is not ideal for stability reasons")]),t._v(" "),r("h3",{attrs:{id:"ath9kfixup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ath9kfixup"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/chunnann/ATH9KFixup",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATH9KFixup"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("To be paired with AirPortAtheros40 to fix support for many Atheros cards, similar idea to AirportBrcmFixup")]),t._v(" "),r("h3",{attrs:{id:"athbluetoothfirmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#athbluetoothfirmware"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://github.com/zxystd/AthBluetoothFirmware/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("AthBluetoothFirmware"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Required to ensure Bluetooth firmware is loaded correctly in macOS")])])}),[],!1,null,null,null);e.default=o.exports}}]);