document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#app',
        data() {
            return {
                db: [{
                    "tab": "Adobe",
                    "icon": "",
                    "list": [{
                        "title": "安装常见问题",
                        "icon": "",
                        "nav": [{
                            "name": "常见问题",
                            "wenti": "https://x.xu5.cc/post/219.html"
                        }]
                    }, {
                        "title": "Adobe全家桶一键安装版",
                        "icon": "static/img/icons/adobe.svg",
                        "nav": [{
                            "name": "Adobe 2024",
                            "url": "https://pan.baidu.com/s/1ipTYR9rVTiYAIXztSSNe5Q?pwd=2q7b",
                            "uc": "https://pan.quark.cn/s/8da88ff41e47",
                            "xun": "https://pan.xunlei.com/s/VOA_L3c7tclRAp6ajwwdPAetA1?pwd=n42j#",
                            "jc": "https://x.xu5.cc/post/412.html"
                        }, {
                            "name": "Adobe 2023",
                            "url": "https://pan.baidu.com/s/1824PXgNsFjv6BdqHEDzoIw?pwd=p45p",
                            "uc": "https://pan.quark.cn/s/b667b2a7499d",
                            "xun": "https://pan.xunlei.com/s/VOA_Lqm99e43IkMi2NqHMr6-A1?pwd=bkr4#",
                            "jc": "https://x.xu5.cc/post/411.html"
                        }, {
                            "name": "Adobe 2022",
                            "url": "https://pan.baidu.com/s/1lGoSEPOhypW9z3n9GuKwaA?pwd=na42",
                            "uc": "https://pan.quark.cn/s/c3857730770a",
                            "xun": "https://pan.xunlei.com/s/VOA_LupBptIpRc12obM2fTnlA1?pwd=3p4v#",
                            "jc": "https://x.xu5.cc/post/410.html"
                        }, {
                            "name": "Adobe 2021",
                            "url": "https://pan.baidu.com/s/10U6vmUbzACr8tVNMkV1YlQ?pwd=tz4m",
                            "uc": "https://pan.quark.cn/s/448db6b91a8d",
                            "xun": "https://pan.xunlei.com/s/VOA_M2mNI5tWX5IfBjXaS98iA1?pwd=y3ry#",
                            "jc": "https://x.xu5.cc/post/409.html"
                        }, {
                            "name": "Adobe 2021|win7 X64",
                            "url": "https://pan.baidu.com/s/1qseIQ9s6-ixlJgM0yGN0fA?pwd=hirn",
                            "uc": "https://pan.quark.cn/s/1928e33b9df3",
                            "xun": "https://pan.xunlei.com/s/VOA_LxcSGONOT7lMRvzE_wvjA1?pwd=3xrc#",
                            "jc": "https://x.xu5.cc/post/408.html"
                        }, {
                            "name": "Adobe 2020",
                            "url": "https://pan.baidu.com/s/1yJkIVk4vcz-L5h1DuycaFg?pwd=hn2i",
                            "uc": "https://pan.quark.cn/s/7c0b5eb813b1",
                            "xun": "https://pan.xunlei.com/s/VOA_M70divz84wocylJGyxdBA1?pwd=kh8r#",
                            "jc": "https://x.xu5.cc/post/407.html"
                        }, {
                            "name": "Adobe 2019",
                            "url": "https://pan.baidu.com/s/19Mpna0va0n3ghu38kxZ_xQ?pwd=7xr2",
                            "uc": "https://pan.quark.cn/s/419b87bd51e7",
                            "xun": "https://pan.xunlei.com/s/VOA_MAj3TZUEL58Uh04CvQgjA1?pwd=ns3y#",
                            "jc": "https://x.xu5.cc/post/406.html"
                        }, {
                            "name": "Adobe 2018",
                            "url": "https://pan.baidu.com/s/1cTz3Mik1W76F9XJjS8n5NA?pwd=cn6g",
                            "uc": "https://pan.quark.cn/s/01ea7f3e4154",
                            "xun": "https://pan.xunlei.com/s/VOA_MD3FCOoU9K0ODnf1fViAA1?pwd=u25w#",
                            "jc": "https://x.xu5.cc/post/405.html"
                        }]
                    }, {
                        "title": "Acrobat",
                        "icon": "static/img/icons/Acrobat_20DC.svg",
                        "nav": [{
                            "name": "Acrobat 2024",
                            "url": "https://pan.baidu.com/s/1G_BgCWeaXxcF1hDNxvec7A?pwd=tkha",
                            "xun": "https://pan.xunlei.com/s/VOA_RiDDc5vCQsfuW8Uul3TBA1?pwd=hrpj#",
                            "uc": "https://pan.quark.cn/s/3c4e2b8fe32b",
                            "su": "http://su.xu5.cc/post/14.html",
                            "jc": "https://x.xu5.cc/post/39.html"
                        }, {
                            "name": "Acrobat 2023",
                            "url": "https://pan.baidu.com/s/1Xvr9YTCHZuNn7IEi6wvX-A?pwd=vjev",
                            "xun": "https://pan.xunlei.com/s/VOA_Rkoy3PGiBhN4CQQ7OKN_A1?pwd=wq7x#",
                            "uc": "https://pan.quark.cn/s/0d3b3963c649",
                            "su": "http://su.xu5.cc/post/15.html",
                            "jc": "https://x.xu5.cc/post/40.html"
                        }, {
                            "name": "Acrobat 2022",
                            "url": "https://pan.baidu.com/s/1wESWY0dI-oLgeWzU85kuvA?pwd=t5gw",
                            "xun": "https://pan.xunlei.com/s/VOA_RnpRPkfr8DvmexD3IAN7A1?pwd=zeq3#",
                            "uc": "https://pan.quark.cn/s/ffbc6b7126a5",
                            "su": "http://su.xu5.cc/post/16.html",
                            "jc": "https://x.xu5.cc/post/41.html"
                        }, {
                            "name": "Acrobat 2021",
                            "url": "https://pan.baidu.com/s/1MF_3ipjGYL9v6dRJv2WO9Q?pwd=6jfk",
                            "xun": "https://pan.xunlei.com/s/VOA_Rq8N17p82f1YWXjQLaERA1?pwd=62u2#",
                            "uc": "https://pan.quark.cn/s/844ae5b3da55",
                            "su": "http://su.xu5.cc/post/17.html",
                            "jc": "https://x.xu5.cc/post/42.html"
                        }, {
                            "name": "Acrobat XI",
                            "url": "https://pan.baidu.com/s/1v-efs34M0hLh2Q53xNuVLQ?pwd=axmu",
                            "xun": "https://pan.xunlei.com/s/VOA_RsVaI5tWX5IfBjXaTviIA1?pwd=jekp#",
                            "uc": "https://pan.quark.cn/s/1757b22de029",
                            "su": "http://su.xu5.cc/post/18.html",
                            "jc": "https://x.xu5.cc/post/43.html"
                        }]
                    }, {
                        "title": "After Effects",
                        "icon": "/static/img/icons/after-effects.svg",
                        "nav": [{
                            "name": "After Effects 2025",
                            "url": "https://pan.baidu.com/s/16dGRcKzJJOcuAoiyQbPv0Q?pwd=bxun",
                            "xun": "https://pan.xunlei.com/s/VOA_S9K2n8TgItOLGdk1B4ZPA1?pwd=5z4m#",
                            "uc": "https://pan.quark.cn/s/f3d42fa51678",
                            "su": "https://su.xu5.cc/post/322.html",
                            "jc": "https://x.xu5.cc/post/330.html"
                        }, {
                            "name": "After Effects 2024",
                            "url": "https://pan.baidu.com/s/1MEqwwcBQxBBchYOwczDuGA?pwd=trjn",
                            "xun": "https://pan.xunlei.com/s/VOA_SC7OVFzs56Arorr0sJBcA1?pwd=fma2#",
                            "uc": "https://pan.quark.cn/s/f81689bf8554",
                            "su": "http://su.xu5.cc/post/19.html",
                            "jc": "https://x.xu5.cc/post/18.html"
                        }, {
                            "name": "After Effects 2023",
                            "url": "https://pan.baidu.com/s/1gfNeVULeO2F8g9N82gFptQ?pwd=otui",
                            "xun": "https://pan.xunlei.com/s/VOA_SFMFIPn9DWokIjFkqEzCA1?pwd=zxxy#",
                            "uc": "https://pan.quark.cn/s/b6723b1bf65e",
                            "su": "http://su.xu5.cc/post/20.html",
                            "jc": "https://x.xu5.cc/post/19.html"
                        }, {
                            "name": "After Effects 2022",
                            "url": "https://pan.baidu.com/s/1Rc1BogBvE9nGXIm54gqdgQ?pwd=x7fg",
                            "xun": "https://pan.xunlei.com/s/VOA_SIbLa83B8UJ0t30t6e8eA1?pwd=ubee#",
                            "uc": "https://pan.quark.cn/s/816a729b0beb",
                            "su": "http://su.xu5.cc/post/21.html",
                            "jc": "https://x.xu5.cc/post/44.html"
                        }, {
                            "name": "After Effects 2021",
                            "url": "https://pan.baidu.com/s/1T-hkL9kJZkwzFgfoAxig3g?pwd=0dzt",
                            "xun": "https://pan.xunlei.com/s/VOA_SL93TZUEL58Uh04Cx-v7A1?pwd=q6yd#",
                            "uc": "https://pan.quark.cn/s/42f0b17d956e",
                            "su": "http://su.xu5.cc/post/22.html",
                            "jc": "https://x.xu5.cc/post/45.html"
                        }, {
                            "name": "After Effects 2020",
                            "url": "https://pan.baidu.com/s/1GkaX43lNdIDY6iDQLfiOQw?pwd=q6kv",
                            "xun": "https://pan.xunlei.com/s/VOA_SNZULozyClXaX8k4kYDVA1?pwd=wb7k#",
                            "uc": "https://pan.quark.cn/s/e1d56815d64a",
                            "su": "http://su.xu5.cc/post/23.html",
                            "jc": "https://x.xu5.cc/post/46.html"
                        }, {
                            "name": "After Effects 2019",
                            "url": "https://pan.baidu.com/s/147Dbp98o4rkidfRRusbE-A?pwd=zjyo",
                            "xun": "https://pan.xunlei.com/s/VOA_SPucf6ylI6WalmkGqglWA1?pwd=a39z#",
                            "uc": "https://pan.quark.cn/s/9d3485d9e3d0",
                            "su": "http://su.xu5.cc/post/24.html",
                            "jc": "https://x.xu5.cc/post/47.html"
                        }, {
                            "name": "After Effects 2018 CC",
                            "url": "https://pan.baidu.com/s/1aKEb1ip2DHSh-ls29_ON_Q?pwd=ojxv",
                            "xun": "https://pan.xunlei.com/s/VOA_SvDTtkjA9A1wN0h0c0RwA1?pwd=cwnh#",
                            "uc": "https://pan.quark.cn/s/ea00f016ed93",
                            "su": "http://su.xu5.cc/post/25.html",
                            "jc": "https://x.xu5.cc/post/50.html"
                        }, {
                            "name": "After Effects 2017 CC",
                            "url": "https://pan.baidu.com/s/1dfqifqGPc6gf6vnt3TnIwg?pwd=5x7w",
                            "xun": "https://pan.xunlei.com/s/VOA_T0XzSN7RdpC7tQ53n8FDA1?pwd=7efy#",
                            "uc": "https://pan.quark.cn/s/22c1ca125ddb",
                            "su": "http://su.xu5.cc/post/28.html",
                            "jc": "https://x.xu5.cc/post/51.html"
                        }, {
                            "name": "After Effects 2016 CC",
                            "url": "https://pan.baidu.com/s/18XgnXvNXxSrn08GwC8hI5w?pwd=203h",
                            "xun": "https://pan.xunlei.com/s/VOA_T3CAo7HCghBg0Jv7-a33A1?pwd=98fg#",
                            "uc": "https://pan.quark.cn/s/f25be066d2b9",
                            "su": "http://su.xu5.cc/post/29.html",
                            "jc": "https://x.xu5.cc/post/52.html"
                        }, {
                            "name": "After Effects CC",
                            "url": "https://pan.baidu.com/s/1Xp6eUhhaLBMyyYxOlOL66w?pwd=t17m",
                            "xun": "https://pan.xunlei.com/s/VOA_T9xKPkfr8DvmexD3IXhQA1?pwd=w927#",
                            "uc": "https://pan.quark.cn/s/b6cbad5a473f",
                            "su": "http://su.xu5.cc/post/30.html",
                            "jc": "https://x.xu5.cc/post/56.html"
                        }, {
                            "name": "After Effects CS6",
                            "url": "https://pan.baidu.com/s/16RydjLagbPYYCQtteEq3vQ?pwd=0orv",
                            "xun": "https://pan.xunlei.com/s/VOA_TCe1n8TgItOLGdk1BOVnA1?pwd=cq57#",
                            "uc": "https://pan.quark.cn/s/97d7587b929d",
                            "su": "http://su.xu5.cc/post/31.html",
                            "jc": "https://x.xu5.cc/post/53.html"
                        }, {
                            "name": "After Effects Cs5",
                            "url": "https://pan.baidu.com/s/1Vb6y5uace53BYsZ3gy6now?pwd=aqop",
                            "xun": "https://pan.xunlei.com/s/VOA_TGIGTGvLpavAUvheal0tA1?pwd=zxyq#",
                            "uc": "https://pan.quark.cn/s/77bdd6394f10",
                            "su": "http://su.xu5.cc/post/32.html",
                            "jc": "https://x.xu5.cc/post/54.html"
                        }, {
                            "name": "After Effects Cs4",
                            "url": "https://pan.baidu.com/s/1TijsWY3JKetjXTOie9582Q?pwd=k9ri",
                            "xun": "https://pan.xunlei.com/s/VOA_TIiWGONOT7lMRvzEcLl8A1?pwd=ius2#",
                            "uc": "https://pan.quark.cn/s/03adad3504e8",
                            "su": "http://su.xu5.cc/post/33.html",
                            "jc": "https://x.xu5.cc/post/55.html"
                        }]
                    }, {
                        "title": "Animate",
                        "icon": "/static/img/icons/animate.svg",
                        "nav": [{
                            "name": "Animate 2024",
                            "url": "https://pan.baidu.com/s/1KveLtPSs8xKD583ZSF1D9w?pwd=bl0x",
                            "xun": "https://pan.xunlei.com/s/VOA_UV1KDr78N3exXOZW2wtqA1?pwd=6dxb#",
                            "uc": "https://pan.quark.cn/s/6ec84ef3b65a",
                            "su": "http://su.xu5.cc/post/140.html",
                            "jc": "https://x.xu5.cc/post/17.html"
                        }, {
                            "name": "Animate 2023",
                            "url": "https://pan.baidu.com/s/1n4BHa7UWKwy2hMcEp4C2Lw?pwd=b0pu",
                            "xun": "https://pan.xunlei.com/s/VOA_UWxAm-xVP8CEro5liL1YA1?pwd=56pe#",
                            "uc": "https://pan.quark.cn/s/cc9ab88717e5",
                            "su": "http://su.xu5.cc/post/141.html",
                            "jc": "https://x.xu5.cc/post/413.html"
                        }, {
                            "name": "Animate 2022",
                            "url": "https://pan.baidu.com/s/1-a9Z680m9McG_tIoPiCuWA?pwd=flfk",
                            "xun": "https://pan.xunlei.com/s/VOA_UZ7Rc5vCQsfuW8Uulu6_A1?pwd=bt4n#",
                            "uc": "https://pan.quark.cn/s/12e3b9997482",
                            "su": "http://su.xu5.cc/post/142.html",
                            "jc": "https://x.xu5.cc/post/414.html"
                        }, {
                            "name": "Animate 2021",
                            "url": "https://pan.baidu.com/s/1Q3VdBQwmCAiaMOE-ddHMlg?pwd=tumc",
                            "xun": "https://pan.xunlei.com/s/VOA_U_xAm-xVP8CEro5liM-8A1?pwd=uhyw#",
                            "uc": "https://pan.quark.cn/s/f711e56a2423",
                            "su": "http://su.xu5.cc/post/143.html",
                            "jc": "https://x.xu5.cc/post/415.html"
                        }, {
                            "name": "Animate 2020",
                            "url": "https://pan.baidu.com/s/1I3ZFHvHi1JbmCyLADKnK_A?pwd=e38m",
                            "xun": "https://pan.xunlei.com/s/VOA_UcH5M8b-PFjZe2mc6Iz3A1?pwd=iufu#",
                            "uc": "https://pan.quark.cn/s/b1db06d418ee",
                            "su": "http://su.xu5.cc/post/144.html",
                            "jc": "https://x.xu5.cc/post/416.html"
                        }, {
                            "name": "Animate 2019",
                            "url": "https://pan.baidu.com/s/10q_LLQJQmJ8HPWT8f27ZtA?pwd=2885",
                            "xun": "https://pan.xunlei.com/s/VOA_Ue_JgVXbp0dfdIy4igaMA1?pwd=a2fc#",
                            "uc": "https://pan.quark.cn/s/01dd4f7ff087",
                            "su": "http://su.xu5.cc/post/145.html",
                            "jc": "https://x.xu5.cc/post/417.html"
                        }, {
                            "name": "Animate 2018",
                            "url": "https://pan.baidu.com/s/1UsAmxt3M_EIZwCLnSULd_Q?pwd=ueob",
                            "xun": "https://pan.xunlei.com/s/VOA_UgtR3ck8KTQs8urc-FGxA1?pwd=jatt#",
                            "uc": "https://pan.quark.cn/s/b32948fe2011",
                            "su": "http://su.xu5.cc/post/146.html",
                            "jc": "https://x.xu5.cc/post/418.html"
                        }]
                    }, {
                        "title": "Audition",
                        "icon": "/static/img/icons/audition.svg",
                        "nav": [{
                            "name": "Audition 2025",
                            "url": "https://pan.baidu.com/s/1avDDJC7Ks0rOjaZHo7vDug?pwd=yfwi",
                            "xun": "https://pan.xunlei.com/s/VOA_Uxaga83B8UJ0t30t7SmvA1?pwd=4g6r#",
                            "uc": "https://pan.quark.cn/s/3c5cdab9f1d1",
                            "su": "https://su.xu5.cc/post/335.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }, {
                            "name": "Audition 2024",
                            "url": "https://pan.baidu.com/s/1ZZHhJod38qSoaSQVhZm-zg?pwd=xpxv",
                            "xun": "https://pan.xunlei.com/s/VOA_V-Dx9e43IkMi2NqHPNhMA1?pwd=yg4d#",
                            "uc": "https://pan.quark.cn/s/a2f9dd1395d6",
                            "su": "http://su.xu5.cc/post/34.html",
                            "jc": "https://x.xu5.cc/post/20.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }, {
                            "name": "Audition 2023",
                            "url": "https://pan.baidu.com/s/1zhUUtIBzxfnlqbweAKiBNQ?pwd=xec6",
                            "xun": "https://pan.xunlei.com/s/VOA_V1dyXWDu4kivZv7heukTA1?pwd=kzem#",
                            "uc": "https://pan.quark.cn/s/be646c33a6f3",
                            "su": "http://su.xu5.cc/post/35.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }, {
                            "name": "Audition 2022",
                            "url": "https://pan.baidu.com/s/1OTTGYdz7maVidqUiMCPE9g?pwd=jyuz",
                            "xun": "https://pan.xunlei.com/s/VOA_V3pM3yWeXr1momDUNmCIA1?pwd=qvbs#",
                            "uc": "https://pan.quark.cn/s/554d7b7c5745",
                            "su": "http://su.xu5.cc/post/36.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }, {
                            "name": "Audition 2021",
                            "url": "https://pan.baidu.com/s/1SQbg0qctkJ0mxYQNTkaYJQ?pwd=hm8b",
                            "xun": "https://pan.xunlei.com/s/VOA_V5mUpBNPY6MqzPHKIkxhA1?pwd=hv47#",
                            "uc": "https://pan.quark.cn/s/97404311d884",
                            "su": "http://su.xu5.cc/post/37.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }, {
                            "name": "Audition 2020",
                            "url": "https://pan.baidu.com/s/18x2I057MMUiBWa_h1cKtkg?pwd=rcsf",
                            "xun": "https://pan.xunlei.com/s/VOA_V7h95SM6bch3h_fF1wszA1?pwd=y22i#",
                            "uc": "https://pan.quark.cn/s/37b7f68eff8a",
                            "su": "http://su.xu5.cc/post/38.html",
                            "jc": "https://x.xu5.cc/post/20.html"
                        }]
                    }, {
                        "title": "Bridge",
                        "icon": "/static/img/icons/bridge.svg",
                        "nav": [{
                            "name": "Bridge 2025",
                            "url": "https://pan.baidu.com/s/1EZVsLtBcXXy3fckinLCQLw?pwd=jucm",
                            "xun": "https://pan.xunlei.com/s/VOA_VMErtclRAp6ajwwdS62mA1?pwd=kevy#",
                            "uc": "https://pan.quark.cn/s/4c029952cff8",
                            "su": "https://su.xu5.cc/post/325.html",
                            "jc": "https://x.xu5.cc/post/331.html"
                        }, {
                            "name": "Bridge 2024",
                            "url": "https://pan.baidu.com/s/1_Ip88bLvIL5tkwm_v9LfnA?pwd=cxkg",
                            "xun": "https://pan.xunlei.com/s/VOA_VOMdTZUEL58Uh04CxpneA1?pwd=sirv#",
                            "uc": "https://pan.quark.cn/s/bb071ffbe043",
                            "su": "https://su.xu5.cc/post/39.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }, {
                            "name": "Bridge 2023",
                            "url": "https://pan.baidu.com/s/1v-CsAqosIjlaq2c3t26j1w?pwd=xlag",
                            "xun": "https://pan.xunlei.com/s/VOA_VQECSN7RdpC7tQ53nsbjA1?pwd=m4wz#",
                            "uc": "https://pan.quark.cn/s/c7223529b955",
                            "su": "https://su.xu5.cc/post/40.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }, {
                            "name": "Bridge 2022",
                            "url": "https://pan.baidu.com/s/1IkVNVHBmHrj7mThbkUC1Kg?pwd=bsb9",
                            "xun": "https://pan.xunlei.com/s/VOA_VSCNSN7RdpC7tQ53nt5qA1?pwd=xhcd#",
                            "uc": "https://pan.quark.cn/s/da3a72243a08",
                            "su": "https://su.xu5.cc/post/41.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }, {
                            "name": "Bridge 2021",
                            "url": "https://pan.baidu.com/s/1xfvkOQvk0YhRcmkEthcegw?pwd=5gjs",
                            "xun": "https://pan.xunlei.com/s/VOA_VUo6GPS1tqT-E-IKcscUA1?pwd=bxzk#",
                            "uc": "https://pan.quark.cn/s/ef755a7ff300",
                            "su": "https://su.xu5.cc/post/42.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }, {
                            "name": "Bridge 2020",
                            "url": "https://pan.baidu.com/s/1RvagLNB30MTYE0OY0EnPvw?pwd=0wv6",
                            "xun": "https://pan.xunlei.com/s/VOA_VXGSGPS1tqT-E-IKctHYA1?pwd=uzrt#",
                            "uc": "https://pan.quark.cn/s/265d60563dd8",
                            "su": "https://su.xu5.cc/post/43.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }, {
                            "name": "Bridge 2018",
                            "url": "https://pan.baidu.com/s/1zSZhOnl5KGwWyr_1Vy0jZA?pwd=czty",
                            "xun": "https://pan.xunlei.com/s/VOA_V_-f-7-iZ2UpTeLIiImsA1?pwd=uxt5#",
                            "uc": "https://pan.quark.cn/s/706092e8f017",
                            "su": "https://su.xu5.cc/post/44.html",
                            "jc": "https://x.xu5.cc/post/23.html"
                        }]
                    }, {
                        "title": "Character Animator",
                        "icon": "/static/img/icons/character-animator.svg",
                        "nav": [{
                            "name": "Character Animator 2025",
                            "url": "https://pan.baidu.com/s/1sMtV8A8szTwQRPH0i0_tew?pwd=zww7",
                            "xun": "https://pan.xunlei.com/s/VOA_VpeiGPS1tqT-E-IKd0saA1?pwd=yvgp#",
                            "uc": "https://pan.quark.cn/s/4861bd86a6e4",
                            "su": "https://su.xu5.cc/post/332.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }, {
                            "name": "Character Animator 2024",
                            "url": "https://pan.baidu.com/s/1YlqSzsXlgShgh7wCquOiEA?pwd=r6o4",
                            "xun": "https://pan.xunlei.com/s/VOA_VsV3XWDu4kivZv7hf9aLA1?pwd=gn4x#",
                            "uc": "https://pan.quark.cn/s/e6482622f1cd",
                            "su": "http://su.xu5.cc/post/45.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }, {
                            "name": "Character Animator 2023",
                            "url": "https://pan.baidu.com/s/1-Ot3gPhx5lLdqdPXmgz_ug?pwd=rwai",
                            "xun": "https://pan.xunlei.com/s/VOA_VucTa83B8UJ0t30t7iwtA1?pwd=i5qq#",
                            "uc": "https://pan.quark.cn/s/01388bc34353",
                            "su": "http://su.xu5.cc/post/46.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }, {
                            "name": "Character Animator 2022",
                            "url": "https://pan.baidu.com/s/1CDb4vwyIyVpRqDf3I2xtMA?pwd=hn5g",
                            "xun": "https://pan.xunlei.com/s/VOA_Vx4YPkfr8DvmexD3JPSlA1?pwd=38yr#",
                            "uc": "https://pan.quark.cn/s/a1d5902755a8",
                            "su": "http://su.xu5.cc/post/47.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }, {
                            "name": "Character Animator 2021",
                            "url": "https://pan.baidu.com/s/1QEv1O03JsfzQtD5MPPPllw?pwd=v4u8",
                            "xun": "https://pan.xunlei.com/s/VOA_Vz933PGiBhN4CQQ7PWPdA1?pwd=y54t#",
                            "uc": "https://pan.quark.cn/s/cd2c3cb93df7",
                            "su": "http://su.xu5.cc/post/48.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }, {
                            "name": "Character Animator 2020",
                            "url": "https://pan.baidu.com/s/1PfRj7FUzN7IyREaOhFghpA?pwd=bcbd",
                            "xun": "https://pan.xunlei.com/s/VOA_W0WDQzDSnT2515fdTUb8A1?pwd=sifk#",
                            "uc": "https://pan.quark.cn/s/921167df3ea9",
                            "su": "http://su.xu5.cc/post/49.html",
                            "jc": "https://x.xu5.cc/post/419.html"
                        }]
                    }, {
                        "title": "Dimension",
                        "icon": "static/img/icons/dimension.svg",
                        "nav": [{
                            "name": "Dimension 2025",
                            "xun": "https://pan.xunlei.com/s/VOJOHHKFQSalB7DDz5zSPSEtA1?pwd=kyk5#",
                            "uc": "https://pan.quark.cn/s/172c175fe662",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2024",
                            "url": "https://pan.baidu.com/s/1Gk-lAUBXvPlFMWmknlTjRQ?pwd=mk6m",
                            "xun": "https://pan.xunlei.com/s/VOA_X5j9Dr78N3exXOZW3qd6A1?pwd=7ufj#",
                            "uc": "https://pan.quark.cn/s/de99c8013cb8",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2023",
                            "url": "https://pan.baidu.com/s/1EcRxDNoDabOH-JA-DRpC_w?pwd=gccc",
                            "xun": "https://pan.xunlei.com/s/VOA_X7rDc5vCQsfuW8UumlNHA1?pwd=55qs#",
                            "uc": "https://pan.quark.cn/s/28d8b48c262c",
                            "su": "http://su.xu5.cc/post/50.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2021  cc",
                            "url": "https://pan.baidu.com/s/1Whs93fMulfT6iv5La7APaw?pwd=frnn",
                            "xun": "https://pan.xunlei.com/s/VOA_XBM_ivz84wocylJH1DI2A1?pwd=rm3u#",
                            "uc": "https://pan.quark.cn/s/560f090000d9",
                            "su": "http://su.xu5.cc/post/51.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2020 cc",
                            "url": "https://pan.baidu.com/s/1EYKRS-tY7z0KnRNn5tN05g?pwd=9yy0",
                            "xun": "https://pan.xunlei.com/s/VOA_XDUb17p82f1YWXjQNFs7A1?pwd=ufpv#",
                            "uc": "https://pan.quark.cn/s/d5810c8652e6",
                            "su": "http://su.xu5.cc/post/52.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2019 cc",
                            "url": "https://pan.baidu.com/s/1Qlt0yE6NnXtqj6nbvdg35A?pwd=pu1p",
                            "xun": "https://pan.xunlei.com/s/VOA_XG4JtclRAp6ajwwdScYhA1?pwd=hkmr#",
                            "uc": "https://pan.quark.cn/s/0827ffdc7061",
                            "su": "http://su.xu5.cc/post/53.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension 2018 CC",
                            "url": "https://pan.baidu.com/s/1uB9mSI0wdvPjAluI6ITu2g?pwd=npyb",
                            "xun": "https://pan.xunlei.com/s/VOA_XINBpBNPY6MqzPHKJR-fA1?pwd=sz4b#",
                            "uc": "https://pan.quark.cn/s/319e9b159a0b",
                            "su": "http://su.xu5.cc/post/54.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }, {
                            "name": "Dimension CC",
                            "url": "https://pan.baidu.com/s/1eDhpm89hOxoB9Kh8lQK7Ww?pwd=sz83",
                            "xun": "https://pan.xunlei.com/s/VOA_XKPbPkfr8DvmexD3JocZA1?pwd=ciiw#",
                            "uc": "https://pan.quark.cn/s/80b33c5af8f7",
                            "su": "http://su.xu5.cc/post/55.html",
                            "jc": "https://x.xu5.cc/post/420.html"
                        }]
                    }, {
                        "title": "Dreamweaver",
                        "icon": "/static/img/icons/dreamweaver.svg",
                        "nav": [{
                            "name": "Dreamweaver 2021",
                            "url": "https://pan.baidu.com/s/1Sc0yuo1YzrEuQ89mnRyUaw?pwd=scrn",
                            "xun": "https://pan.xunlei.com/s/VOA_XpM_TZUEL58Uh04Cy_HlA1?pwd=z6vr#",
                            "uc": "https://pan.quark.cn/s/38be000afd80",
                            "su": "http://su.xu5.cc/post/56.html",
                            "jc": "https://x.xu5.cc/post/421.html"
                        }, {
                            "name": "Dreamweaver 2020",
                            "url": "https://pan.baidu.com/s/1iUjEycxQX8QG-YVP_LNfPw?pwd=k857",
                            "xun": "https://pan.xunlei.com/s/VOA_XrVRLozyClXaX8k4mBLrA1?pwd=69vm#",
                            "uc": "https://pan.quark.cn/s/d83ada333fc1",
                            "su": "http://su.xu5.cc/post/57.html",
                            "jc": "https://x.xu5.cc/post/421.html"
                        }, {
                            "name": "Dreamweaver 2019",
                            "url": "https://pan.baidu.com/s/1jWb12SdEzRYPyCQiBZ4uYw?pwd=9vx5",
                            "xun": "https://pan.xunlei.com/s/VOA_XtWsptIpRc12obM2izVTA1?pwd=j8r5#",
                            "uc": "https://pan.quark.cn/s/fb1ade948a2e",
                            "su": "http://su.xu5.cc/post/58.html",
                            "jc": "https://x.xu5.cc/post/421.html"
                        }, {
                            "name": "Dreamweaver 2018 CC",
                            "url": "https://pan.baidu.com/s/1ksdN8Hf4wFoYgkUwyIK6Fw?pwd=4zpm",
                            "xun": "https://pan.xunlei.com/s/VOA_XvaO_bT-Arqvd0uJCQNQA1?pwd=cm9b#",
                            "uc": "https://pan.quark.cn/s/b6f22509a236",
                            "su": "http://su.xu5.cc/post/59.html",
                            "jc": "https://x.xu5.cc/post/421.html"
                        }]
                    }, {
                        "title": "illustrator",
                        "icon": "/static/img/icons/illustrator.svg",
                        "nav": [{
                            "name": "illustrator 2025",
                            "url": "https://pan.baidu.com/s/1pD9t23IuIMCKArxlgUPElg?pwd=thj9",
                            "xun": "https://pan.xunlei.com/s/VOA_YxvRR_r-zZAMhnoFcOj5A1?pwd=tww4#",
                            "uc": "https://pan.quark.cn/s/2c4f7cd46199",
                            "su": "https://su.xu5.cc/post/324.html",
                            "jc": "https://x.xu5.cc/post/332.html"
                        }, {
                            "name": "illustrator 2024",
                            "url": "https://pan.baidu.com/s/1X5ZoWAVlZuJwRe_3Jbtehg?pwd=wgqb",
                            "xun": "https://pan.xunlei.com/s/VOA_Z1uX17p82f1YWXjQNnH0A1?pwd=j4a3#",
                            "uc": "https://pan.quark.cn/s/7a92a1923f42",
                            "su": "http://su.xu5.cc/post/60.html",
                            "jc": "https://x.xu5.cc/post/25.html"
                        }, {
                            "name": "illustrator 2023",
                            "url": "https://pan.baidu.com/s/1GARVF4USu76IvDF6F4tQsw?pwd=7eg7",
                            "xun": "https://pan.xunlei.com/s/VOA_Z4egTZUEL58Uh04Cz0VbA1?pwd=44ic#",
                            "uc": "https://pan.quark.cn/s/5f20df57a30c",
                            "su": "http://su.xu5.cc/post/61.html",
                            "jc": "https://x.xu5.cc/post/74.html"
                        }, {
                            "name": "illustrator 2022",
                            "url": "https://pan.baidu.com/s/1BIxli603MlSt2fTqgQiZwA?pwd=zml1",
                            "xun": "https://pan.xunlei.com/s/VOA_Z6n4-7-iZ2UpTeLIjQ7BA1?pwd=h47u#",
                            "uc": "https://pan.quark.cn/s/0c5f2117c54a",
                            "su": "http://su.xu5.cc/post/62.html",
                            "jc": "https://x.xu5.cc/post/75.html"
                        }, {
                            "name": "illustrator 2021",
                            "url": "https://pan.baidu.com/s/1mpn23CYGJc5ZLsE5hCTfQA?pwd=6w5y",
                            "xun": "https://pan.xunlei.com/s/VOA_Z91zTZUEL58Uh04Cz1t2A1?pwd=v5az#",
                            "uc": "https://pan.quark.cn/s/e4fc09074d32",
                            "su": "http://su.xu5.cc/post/63.html",
                            "jc": "https://x.xu5.cc/post/76.html"
                        }, {
                            "name": "illustrator 2020",
                            "url": "https://pan.baidu.com/s/15VXyTWZVaspWfDqMvCdWOg?pwd=qaj2",
                            "xun": "https://pan.xunlei.com/s/VOA_ZB4c5SM6bch3h_fF3ACPA1?pwd=wirp#",
                            "uc": "https://pan.quark.cn/s/fb8e03422573",
                            "su": "http://su.xu5.cc/post/64.html",
                            "jc": "https://x.xu5.cc/post/77.html"
                        }, {
                            "name": "illustrator 2019 CC",
                            "url": "https://pan.baidu.com/s/1wWBPVyYkYaTeSgonEFTl0Q?pwd=fuj3",
                            "xun": "https://pan.xunlei.com/s/VOA_ZDzjGONOT7lMRvzEeE-CA1?pwd=nyx7#",
                            "uc": "https://pan.quark.cn/s/7006cbdd00c9",
                            "su": "http://su.xu5.cc/post/65.html",
                            "jc": "https://x.xu5.cc/post/78.html"
                        }, {
                            "name": "illustrator 2018 CC",
                            "url": "https://pan.baidu.com/s/1rO3slUgMJqYjH_HIhJNW_g?pwd=2c4p",
                            "xun": "https://pan.xunlei.com/s/VOA_ZGft7TZlOOUcRUPlM8ZTA1?pwd=3jvp#",
                            "uc": "https://pan.quark.cn/s/0e4402530a89",
                            "su": "http://su.xu5.cc/post/66.html",
                            "jc": "https://x.xu5.cc/post/79.html"
                        }, {
                            "name": "illustrator 2017 CC",
                            "url": "https://pan.baidu.com/s/1r4iBExzM8u1cETehpaV2TA?pwd=k5mm",
                            "xun": "https://pan.xunlei.com/s/VOA_ZIliTGvLpavAUvhecWOoA1?pwd=sbzm#",
                            "uc": "https://pan.quark.cn/s/dbfc107a365f",
                            "su": "http://su.xu5.cc/post/67.html",
                            "jc": "https://x.xu5.cc/post/80.html"
                        }, {
                            "name": "illustrator 2016 CC",
                            "url": "https://pan.baidu.com/s/1FtvUDz8f5cpGsroY4yxVyg?pwd=g5dc",
                            "xun": "https://pan.xunlei.com/s/VOA_ZLPEQzDSnT2515fdUaOvA1?pwd=b88m#",
                            "uc": "https://pan.quark.cn/s/5673cc8fc61f",
                            "su": "http://su.xu5.cc/post/68.html",
                            "jc": "https://x.xu5.cc/post/81.html"
                        }, {
                            "name": "illustrator 2015 CC",
                            "url": "https://pan.baidu.com/s/1VV7FOI1aciaCbC4_xiGnFg?pwd=vfs8",
                            "xun": "https://pan.xunlei.com/s/VOA_ZOnmf6ylI6WalmkGseLRA1?pwd=kgre#",
                            "uc": "https://pan.quark.cn/s/ef7d4a8d9e7d",
                            "su": "http://su.xu5.cc/post/69.html",
                            "jc": "https://x.xu5.cc/post/82.html"
                        }, {
                            "name": "illustrator 2014 CC",
                            "url": "https://pan.baidu.com/s/14BrpetZ5FgvdCeo6L7UFWw?pwd=yg78",
                            "xun": "https://pan.xunlei.com/s/VOA_ZRk5COoU9K0ODnf1jHK8A1?pwd=ia8u#",
                            "uc": "https://pan.quark.cn/s/0f5940b18744",
                            "su": "http://su.xu5.cc/post/70.html",
                            "jc": "https://x.xu5.cc/post/83.html"
                        }]
                    }, {
                        "title": "InCopy",
                        "icon": "/static/img/icons/incopy.svg",
                        "nav": [{
                            "name": "InCopy 2025",
                            "url": "https://pan.baidu.com/s/1lpX8jk2vl5HA4wEr-QgK4A?pwd=cixj",
                            "xun": "https://pan.xunlei.com/s/VOA_ZeiNivz84wocylJH1vIhA1?pwd=qbfz#",
                            "uc": "https://pan.quark.cn/s/5f4f903a3f5c",
                            "su": "https://su.xu5.cc/post/331.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2024",
                            "url": "https://pan.baidu.com/s/1FTXiGkg-awcLisg8dWGTNA?pwd=dce9",
                            "xun": "https://pan.xunlei.com/s/VOA_ZgqPPkfr8DvmexD3KaL6A1?pwd=bvh8#",
                            "uc": "https://pan.quark.cn/s/a2d569a2182b",
                            "su": "http://su.xu5.cc/post/71.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2023",
                            "url": "https://pan.baidu.com/s/1nlgmT6oo0QB5ch3vZHTg2g?pwd=so8s",
                            "xun": "https://pan.xunlei.com/s/VOA_ZiuD-7-iZ2UpTeLIj_PPA1?pwd=mj3w#",
                            "uc": "https://pan.quark.cn/s/1fdfee0b64bf",
                            "su": "http://su.xu5.cc/post/72.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2022",
                            "url": "https://pan.baidu.com/s/1GVBfn0p6aU5JrAF77OJKtw?pwd=1n9h",
                            "xun": "https://pan.xunlei.com/s/VOA_Zl0XSN7RdpC7tQ53pCb3A1?pwd=m4f4#",
                            "uc": "https://pan.quark.cn/s/e1f88c5ae87b",
                            "su": "http://su.xu5.cc/post/73.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2021",
                            "url": "https://pan.baidu.com/s/140zc3KPCSUM8svga7ToOKQ?pwd=6mmb",
                            "xun": "https://pan.xunlei.com/s/VOA_Zn4_QzDSnT2515fdUlklA1?pwd=s4st#",
                            "uc": "https://pan.quark.cn/s/6d827871a1a0",
                            "su": "http://su.xu5.cc/post/74.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2020",
                            "url": "https://pan.baidu.com/s/1yr7R9iHI39_qdP76Cdj5aA?pwd=vkv1",
                            "xun": "https://pan.xunlei.com/s/VOA_ZqQv7TZlOOUcRUPlMKnqA1?pwd=kjz5#",
                            "uc": "https://pan.quark.cn/s/8e6bc511896d",
                            "su": "http://su.xu5.cc/post/76.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2019",
                            "url": "https://pan.baidu.com/s/1XWcM1M8bQA-puw0sRwWsNQ?pwd=pajz",
                            "xun": "https://pan.xunlei.com/s/VOA_Zsp5tkjA9A1wN0h0dyzyA1?pwd=63nc#",
                            "uc": "https://pan.quark.cn/s/a76956b3f78f",
                            "su": "http://su.xu5.cc/post/75.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }, {
                            "name": "InCopy 2018",
                            "url": "https://pan.baidu.com/s/10SCMK8w3h_Jz6SoqSFGTgw?pwd=j8yy",
                            "xun": "https://pan.xunlei.com/s/VOA_ZvHvVvZnyQgLfpmBwtC8A1?pwd=ga2d#",
                            "uc": "https://pan.quark.cn/s/88f73d0b6558",
                            "su": "http://su.xu5.cc/post/77.html",
                            "jc": "https://x.xu5.cc/post/422.html"
                        }]
                    }, {
                        "title": "InDesign",
                        "icon": "/static/img/icons/indesign.svg",
                        "nav": [{
                            "name": "InDesign 2025",
                            "url": "https://pan.baidu.com/s/1q5ZNaNdN0ROnVx3Z6WRubQ?pwd=ncv4",
                            "xun": "https://pan.xunlei.com/s/VOA__7T_pBNPY6MqzPHKKOf8A1?pwd=a8bq#",
                            "uc": "https://pan.quark.cn/s/76f4b9db6f6e",
                            "su": "https://su.xu5.cc/post/328.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2024",
                            "url": "https://pan.baidu.com/s/1mGZ02JZJqlNEeFbgeP3DWQ?pwd=vp1n",
                            "xun": "https://pan.xunlei.com/s/VOA__9Zwc5vCQsfuW8UundSPA1?pwd=ty3a#",
                            "uc": "https://pan.quark.cn/s/27313c906dde",
                            "su": "http://su.xu5.cc/post/78.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2023",
                            "url": "https://pan.baidu.com/s/11WRYzze_HbPLcCi2wqfPog?pwd=jt20",
                            "xun": "https://pan.xunlei.com/s/VOA__BOhm-xVP8CEro5ljvc8A1?pwd=7qqf#",
                            "uc": "https://pan.quark.cn/s/788609579526",
                            "su": "http://su.xu5.cc/post/79.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2022",
                            "url": "https://pan.baidu.com/s/1GWCojyYlts-M6AWPokv8fQ?pwd=b30x",
                            "xun": "https://pan.xunlei.com/s/VOA__DRSc5vCQsfuW8UuneNKA1?pwd=y3af#",
                            "uc": "https://pan.quark.cn/s/3ce60f5875a1",
                            "su": "http://su.xu5.cc/post/80.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2021",
                            "url": "https://pan.baidu.com/s/1bydc6-JP310pntlkAc22pw?pwd=xga9",
                            "xun": "https://pan.xunlei.com/s/VOA__FTl5SM6bch3h_fF3W-KA1?pwd=4ih8#",
                            "uc": "https://pan.quark.cn/s/9838aa8a0bf6",
                            "su": "http://su.xu5.cc/post/81.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2020",
                            "url": "https://pan.baidu.com/s/1pqySAxSNo0bAyxiWJKqtVw?pwd=juo0",
                            "xun": "https://pan.xunlei.com/s/VOA__HknVFzs56Arorr0uoNwA1?pwd=bnwu#",
                            "uc": "https://pan.quark.cn/s/0468554e7245",
                            "su": "http://su.xu5.cc/post/82.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2019",
                            "url": "https://pan.baidu.com/s/1UA2wdYMNBWx7WmzVWH1cBQ?pwd=6tqa",
                            "xun": "https://pan.xunlei.com/s/VOA__JukI5tWX5IfBjXaWgXeA1?pwd=jmey#",
                            "uc": "https://pan.quark.cn/s/d5c356f984bc",
                            "su": "http://su.xu5.cc/post/83.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }, {
                            "name": "InDesign 2018",
                            "url": "https://pan.baidu.com/s/1WKg0US-VEJ6fUqqA1lDG4w?pwd=xkcy",
                            "xun": "https://pan.xunlei.com/s/VOA__LmpR_r-zZAMhnoFconEA1?pwd=uer2#",
                            "uc": "https://pan.quark.cn/s/a9d77284305c",
                            "su": "http://su.xu5.cc/post/84.html",
                            "jc": "https://x.xu5.cc/post/423.html"
                        }]
                    }, {
                        "title": "Lightroom Classic",
                        "icon": "/static/img/icons/lightroom-classic.svg",
                        "nav": [{
                            "name": "Lightroom Classic 14.x",
                            "url": "https://pan.baidu.com/s/1_seN2CJ8ulxH9diIku7C0Q?pwd=k7h4",
                            "xun": "https://pan.xunlei.com/s/VOA___tLo7HCghBg0Jv71mjzA1?pwd=r3se#",
                            "uc": "https://pan.quark.cn/s/76e64cf44b7e",
                            "su": "https://su.xu5.cc/post/329.html",
                            "jc": "https://x.xu5.cc/post/336.html"
                        }, {
                            "name": "Lightroom Classic 13.x",
                            "url": "https://pan.baidu.com/s/1J3DzBGnDWY57XhpVkEHGnA?pwd=4wxf",
                            "xun": "https://pan.xunlei.com/s/VOA__c0MTZUEL58Uh04CzZ7xA1?pwd=m4y8#",
                            "uc": "https://pan.quark.cn/s/e9cf0cdd5537",
                            "su": "http://su.xu5.cc/post/85.html",
                            "jc": "https://x.xu5.cc/post/424.html"
                        }, {
                            "name": "Lightroom Classic 12.x",
                            "url": "https://pan.baidu.com/s/1wJyLrhiEu6vKpQZalJ-oUA?pwd=6hb6",
                            "xun": "https://pan.xunlei.com/s/VOA__e0EyDqGmWgHVXSWvJ79A1?pwd=f8mn#",
                            "uc": "https://pan.quark.cn/s/7beef7140f46",
                            "su": "http://su.xu5.cc/post/86.html",
                            "jc": "https://x.xu5.cc/post/424.html"
                        }, {
                            "name": "Lightroom Classic 11.x",
                            "url": "https://pan.baidu.com/s/1-UUAd9nu_pjGCNcPsNr4dA?pwd=9400",
                            "xun": "https://pan.xunlei.com/s/VOA__fqaTZUEL58Uh04Cz_7GA1?pwd=9462#",
                            "uc": "https://pan.quark.cn/s/a2b943b17530",
                            "su": "http://su.xu5.cc/post/87.html",
                            "jc": "https://x.xu5.cc/post/424.html"
                        }, {
                            "name": "Lightroom Classic 10.x",
                            "url": "https://pan.baidu.com/s/1XPJ5ICPtZltPDOeA5oO6yw?pwd=wjfd",
                            "xun": "https://pan.xunlei.com/s/VOA__i2RtclRAp6ajwwdThy5A1?pwd=38c4#",
                            "uc": "https://pan.quark.cn/s/2a20ce36b69a",
                            "su": "http://su.xu5.cc/post/88.html",
                            "jc": "https://x.xu5.cc/post/424.html"
                        }, {
                            "name": "Lightroom Classic 9.x",
                            "url": "https://pan.baidu.com/s/1QrAjS2DfDZhUMIzxzFWE5A?pwd=oqpc",
                            "xun": "https://pan.xunlei.com/s/VOA__jfzIPn9DWokIjFksum0A1?pwd=ax84#",
                            "uc": "https://pan.quark.cn/s/68e877726989",
                            "su": "http://su.xu5.cc/post/89.html",
                            "jc": "https://x.xu5.cc/post/424.html"
                        }]
                    }, {
                        "title": "Midea Encoder",
                        "icon": "/static/img/icons/media-encoder.svg",
                        "nav": [{
                            "name": "Midea Encoder 2025",
                            "url": "https://pan.baidu.com/s/1q6CVunPoBVpdyrMiKH0vjQ?pwd=k26f",
                            "xun": "https://pan.xunlei.com/s/VOA_aLk8jqhcVWcsT0Hxwwp9A1?pwd=div9#",
                            "uc": "https://pan.quark.cn/s/794853e4298a",
                            "su": "https://su.xu5.cc/post/334.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2024",
                            "url": "https://pan.baidu.com/s/1sewre5VtQX_CM4jUKG935Q?pwd=xqne",
                            "xun": "https://pan.xunlei.com/s/VOA_aNmAPkfr8DvmexD3L7rpA1?pwd=pi3n#",
                            "uc": "https://pan.quark.cn/s/24cfd975dc45",
                            "su": "http://su.xu5.cc/post/90.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2023",
                            "url": "https://pan.baidu.com/s/1fa1w2xBc7jY1nWzTibO-9w?pwd=u1v4",
                            "xun": "https://pan.xunlei.com/s/VOA_aPN7yDqGmWgHVXSWv_gsA1?pwd=9ktd#",
                            "uc": "https://pan.quark.cn/s/bd3ac8e03bfe",
                            "su": "http://su.xu5.cc/post/91.html",
                            "jc": "https://x.xu5.cc/post/425.html",
                            "jc": "https://x.xu5.cc/post/425.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2022",
                            "url": "https://pan.baidu.com/s/19iNEYaSWXNuL3JQ_JASmVw?pwd=w198",
                            "xun": "https://pan.xunlei.com/s/VOA_aR7p3ck8KTQs8urc1G5pA1?pwd=2atm#",
                            "uc": "https://pan.quark.cn/s/c1078ecaa0aa",
                            "su": "http://su.xu5.cc/post/92.html",
                            "jc": "https://x.xu5.cc/post/425.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2021",
                            "url": "https://pan.baidu.com/s/1xVvUmrKi5W7c6HqGBXEjfg?pwd=e1mi",
                            "xun": "https://pan.xunlei.com/s/VOA_aTv6tclRAp6ajwwdTxoMA1?pwd=f5tj#",
                            "uc": "https://pan.quark.cn/s/e00ee5ccf2aa",
                            "su": "http://su.xu5.cc/post/93.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2020",
                            "url": "https://pan.baidu.com/s/1z2GVcO8DOmPPZhHc2uh46A?pwd=ithw",
                            "xun": "https://pan.xunlei.com/s/VOA_aWu4LozyClXaX8k4nL3MA1?pwd=6qum#",
                            "uc": "https://pan.quark.cn/s/2fa505af34f2",
                            "su": "http://su.xu5.cc/post/94.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2019",
                            "url": "https://pan.baidu.com/s/1RiN5Xe9DcS1aqpPi4i1_2A?pwd=xcuu",
                            "xun": "https://pan.xunlei.com/s/VOA_a_7eGPS1tqT-E-IKemjqA1?pwd=j7mj#",
                            "uc": "https://pan.quark.cn/s/685f3861cbce",
                            "su": "http://su.xu5.cc/post/95.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }, {
                            "name": "Midea Encoder 2018",
                            "url": "https://pan.baidu.com/s/14fF669uYjAueV5YYLuBTYQ?pwd=cdoc",
                            "xun": "https://pan.xunlei.com/s/VOA_acyZivz84wocylJH2_nFA1?pwd=tr3z#",
                            "uc": "https://pan.quark.cn/s/a7d870317dd6",
                            "su": "http://su.xu5.cc/post/96.html",
                            "jc": "https://x.xu5.cc/post/425.html"
                        }]
                    }, {
                        "title": "Photoshop",
                        "icon": "/static/img/icons/photoshop.svg",
                        "nav": [{
                            "name": "Photoshop 2025",
                            "uc": "https://pan.quark.cn/s/0619f03900fe",
                            "xun": "https://pan.xunlei.com/s/VOAaNJ1VtkjA9A1wN0h0w52tA1?pwd=f824#",
                            "url": "https://pan.baidu.com/s/1iMemeU4Z5tCoOHAsx_FH-Q?pwd=85kr",
                            "su": "https://su.xu5.cc/post/327.html",
                            "jc": "https://x.xu5.cc/post/334.html"
                        }, {
                            "name": "Photoshop 2024",
                            "uc": "https://pan.quark.cn/s/210ce5b585b9",
                            "xun": "https://pan.xunlei.com/s/VOAaNLRXptIpRc12obM30Sf4A1?pwd=5dcv#",
                            "url": "https://pan.baidu.com/s/12b8a9Z32LR_Z4dmApnZ0mw?pwd=b0hl",
                            "su": "http://su.xu5.cc/post/97.html",
                            "jc": "https://x.xu5.cc/post/26.html"
                        }, {
                            "name": "Photoshop 2023",
                            "uc": "https://pan.quark.cn/s/530d2562c948",
                            "xun": "https://pan.xunlei.com/s/VOAaNO2fptIpRc12obM30TUMA1?pwd=kb6g#",
                            "url": "https://pan.baidu.com/s/1m2D_gDMRsuTIOHDSr5mY8w?pwd=g2hk",
                            "su": "http://su.xu5.cc/post/98.html",
                            "jc": "https://x.xu5.cc/post/57.html"
                        }, {
                            "name": "Photoshop 2022",
                            "uc": "https://pan.quark.cn/s/5abab5c1c737",
                            "xun": "https://pan.xunlei.com/s/VOAaNQMBVvZnyQgLfpmCDd97A1?pwd=ukbn#",
                            "url": "https://pan.baidu.com/s/1g4Kxjs0phNgbSOijBZnAKA?pwd=z1ri",
                            "su": "http://su.xu5.cc/post/99.html",
                            "jc": "https://x.xu5.cc/post/30.html"
                        }, {
                            "name": "Photoshop 2021",
                            "uc": "https://pan.quark.cn/s/11a2c5de9ada",
                            "xun": "https://pan.xunlei.com/s/VOAaNSjFI5tWX5IfBjXanavjA1?pwd=3grw#",
                            "url": "https://pan.baidu.com/s/1IaNuO_uv_6RzGdRASf7EoA?pwd=0kgt",
                            "su": "http://su.xu5.cc/post/100.html",
                            "jc": "https://x.xu5.cc/post/29.html"
                        }, {
                            "name": "Photoshop 2020",
                            "uc": "https://pan.quark.cn/s/987fc6eb36f9",
                            "xun": "https://pan.xunlei.com/s/VOAaNVwH-7-iZ2UpTeLJ0hqbA1?pwd=fyg7#",
                            "url": "https://pan.baidu.com/s/1XQGGtH7SwfD2gL7mKcnBDA?pwd=3wqx",
                            "su": "http://su.xu5.cc/post/101.html",
                            "jc": "https://x.xu5.cc/post/28.html"
                        }, {
                            "name": "神经网络滤镜离线组件",
                            "xun": "https://pan.xunlei.com/s/VOAaNcId5SM6bch3h_fFLoFDA1?pwd=wt2i#",
                            "url": "https://pan.baidu.com/s/1rybYhSKyRl9VreRKcCcJCA?pwd=9mz4",
                            "uc": "https://pan.quark.cn/s/0a601c64a360",
                            "su": "http://su.xu5.cc/post/103.html"
                        }, {
                            "name": "CameraRaw",
                            "xun": "https://pan.xunlei.com/s/VOAaNhE0COoU9K0ODnf2-mmBA1?pwd=zdkc#",
                            "url": "https://pan.baidu.com/s/1UUHaMkKA3Uq5uJXegxOugw?pwd=2mlh",
                            "uc": "https://pan.quark.cn/s/0c76147cd6e8",
                            "su": "http://su.xu5.cc/post/104.html"
                        }, {
                            "name": "Photoshop 2019 CC",
                            "uc": "https://pan.quark.cn/s/8208d5ddf064",
                            "xun": "https://pan.xunlei.com/s/VOAaODq4f6ylI6WalmkH9v2zA1?pwd=wqb5#",
                            "url": "https://pan.baidu.com/s/1RYd_UHz0JmoVJtc75yTyMw?pwd=2rer",
                            "su": "http://su.xu5.cc/post/102.html",
                            "jc": "https://x.xu5.cc/post/58.html"
                        }, {
                            "name": "Photoshop CC 2018",
                            "url": "https://pan.baidu.com/s/1A1K-37AGRhKeJQp78_cu5Q?pwd=35xl",
                            "xun": "https://pan.xunlei.com/s/VOAaOHyDpBNPY6MqzPHKbtlxA1?pwd=4f3z#",
                            "uc": "https://pan.quark.cn/s/99a515c2843a",
                            "su": "http://su.xu5.cc/post/109.html",
                            "jc": "https://x.xu5.cc/post/60.html"
                        }, {
                            "name": "Photoshop CC 2017",
                            "url": "https://pan.baidu.com/s/1g7JtX1C2YRLvYMUM5cKrdQ?pwd=yekp",
                            "xun": "https://pan.xunlei.com/s/VOAaOMIfyDqGmWgHVXSXDk6mA1?pwd=men6#",
                            "uc": "https://pan.quark.cn/s/d465d1630ab1",
                            "su": "http://su.xu5.cc/post/110.html",
                            "jc": "https://x.xu5.cc/post/61.html"
                        }, {
                            "name": "Photoshop CC 2016",
                            "url": "https://pan.baidu.com/s/1c4hlHex3Kzio2DKVLGUmUA?pwd=gt49",
                            "xun": "https://pan.xunlei.com/s/VOAaOPYyQzDSnT2515fdlj-MA1?pwd=xtan#",
                            "uc": "https://pan.quark.cn/s/5eef436dcab0",
                            "su": "http://su.xu5.cc/post/111.html",
                            "jc": "https://x.xu5.cc/post/62.html"
                        }, {
                            "name": "Photoshop CC 2015",
                            "url": "https://pan.baidu.com/s/1bVGOX8VbO8tfaX8EwpkpSQ?pwd=p9uf",
                            "xun": "https://pan.xunlei.com/s/VOAaOS4r3yWeXr1momDUh4CAA1?pwd=yzqq#",
                            "uc": "https://pan.quark.cn/s/1a091ddb324b",
                            "su": "http://su.xu5.cc/post/112.html",
                            "jc": "https://x.xu5.cc/post/63.html"
                        }, {
                            "name": "Photoshop CC 2014",
                            "url": "https://pan.baidu.com/s/1kW-8GsuvPgkzZjpucPI7Lg?pwd=kjo2",
                            "xun": "https://pan.xunlei.com/s/VOAaOW8Y9e43IkMi2NqHib0SA1?pwd=76jq#",
                            "uc": "https://pan.quark.cn/s/58e917248270",
                            "su": "http://su.xu5.cc/post/113.html",
                            "jc": "https://x.xu5.cc/post/64.html"
                        }, {
                            "name": "Photoshop CC ",
                            "url": "https://pan.baidu.com/s/1bIzuHfd9dqZ2mnB5Ih7iDg?pwd=dfol",
                            "xun": "https://pan.xunlei.com/s/VOAaO_bB3PGiBhN4CQQ7hpsoA1?pwd=9f9c#",
                            "uc": "https://pan.quark.cn/s/11b7848371e3",
                            "su": "http://su.xu5.cc/post/114.html",
                            "jc": "https://x.xu5.cc/post/65.html"
                        }, {
                            "name": "Photoshop CC  CS6",
                            "url": "https://pan.baidu.com/s/1LidStiO9iTc5OznnHmMiAw?pwd=0dme",
                            "xun": "https://pan.xunlei.com/s/VOAaOdANTZUEL58Uh04DH9GfA1?pwd=zd5w#",
                            "uc": "https://pan.quark.cn/s/1ee5ab979c09",
                            "su": "http://su.xu5.cc/post/115.html",
                            "jc": "https://x.xu5.cc/post/66.html"
                        }, {
                            "name": "Photoshop CC  CS5",
                            "url": "https://pan.baidu.com/s/1QX1fCV1RqOUa_96CEFXtfw?pwd=6vy1",
                            "xun": "https://pan.xunlei.com/s/VOAaOgStTZUEL58Uh04DHAJMA1?pwd=y9kv#",
                            "uc": "https://pan.quark.cn/s/3f5db293d02d",
                            "su": "http://su.xu5.cc/post/116.html",
                            "jc": "https://x.xu5.cc/post/67.html"
                        }, {
                            "name": "Photoshop CC  CS4",
                            "url": "https://pan.baidu.com/s/1CLaIEhNPjo2_s_w-4ukY4Q?pwd=aq0i",
                            "xun": "https://pan.xunlei.com/s/VOAaOjNpIsoxC8LpDUR9LHJJA1?pwd=grwg#",
                            "uc": "https://pan.quark.cn/s/d88f41f8fced",
                            "su": "http://su.xu5.cc/post/117.html",
                            "jc": "https://x.xu5.cc/post/68.html"
                        }, {
                            "name": "Photoshop CC  CS3",
                            "url": "https://pan.baidu.com/s/18rU0yWGEsP9AW6RPZSSfpg?pwd=hncb",
                            "xun": "https://pan.xunlei.com/s/VOAaOmcFTZUEL58Uh04DHCwLA1?pwd=in27#",
                            "uc": "https://pan.quark.cn/s/0b9114163141",
                            "su": "http://su.xu5.cc/post/118.html",
                            "jc": "https://x.xu5.cc/post/69.html"
                        }, {
                            "name": "Photoshop CC  CS2",
                            "url": "https://pan.baidu.com/s/1iA88E5-YCOlAZhTAIx_Z6w?pwd=kmpw",
                            "xun": "https://pan.xunlei.com/s/VOAaOqKwTGvLpavAUvhev7LxA1?pwd=5pa9#",
                            "uc": "https://pan.quark.cn/s/33c4a96c1b65",
                            "su": "http://su.xu5.cc/post/119.html",
                            "jc": "https://x.xu5.cc/post/70.html"
                        }, {
                            "name": "Photoshop CC  8.0",
                            "url": "https://pan.baidu.com/s/1QmqMk6KZPFwkL6MyyO38Fg?pwd=g37d",
                            "xun": "https://pan.xunlei.com/s/VOAaOuCUM8b-PFjZe2mcQi5HA1?pwd=abvj#",
                            "uc": "https://pan.quark.cn/s/f9d7033ee48b",
                            "su": "http://su.xu5.cc/post/120.html",
                            "jc": "https://x.xu5.cc/post/71.html"
                        }, {
                            "name": "Photoshop CC  7.0",
                            "url": "https://pan.baidu.com/s/1NQkwKGjs6JGMesebt38qrQ?pwd=jb7t",
                            "xun": "https://pan.xunlei.com/s/VOAaOxM3yDqGmWgHVXSXDwg3A1?pwd=edbe#",
                            "uc": "https://pan.quark.cn/s/4de31e7d8f5d",
                            "su": "http://su.xu5.cc/post/121.html",
                            "jc": "https://x.xu5.cc/post/72.html"
                        }, {
                            "name": "Photoshop CC  6.0",
                            "url": "https://pan.baidu.com/s/1F_Ub3WsMf0fvA9ET5ZBbKQ?pwd=e0p5",
                            "xun": "https://pan.xunlei.com/s/VOAaOzhfSN7RdpC7tQ546lR9A1?pwd=e4bt#",
                            "uc": "https://pan.quark.cn/s/8d3513ac933b",
                            "su": "http://su.xu5.cc/post/122.html",
                            "jc": "https://x.xu5.cc/post/73.html"
                        }]
                    }, {
                        "title": "Photoshop Elements",
                        "icon": "/static/img/icons/Photoshop-Elements.svg",
                        "nav": [{
                            "name": "Photoshop Elements 2025",
                            "url": "https://pan.baidu.com/s/14xNCPDZ26o31CV3qXICS5Q?pwd=gywe",
                            "xun": "https://pan.xunlei.com/s/VOAaPV2xptIpRc12obM31IbUA1?pwd=ab7q#",
                            "uc": "https://pan.quark.cn/s/11510490a0c6",
                            "su": "https://su.xu5.cc/post/336.html",
                            "jc": "https://x.xu5.cc/post/426.html"
                        }, {
                            "name": "Photoshop Elements 2024",
                            "url": "https://pan.baidu.com/s/1ex5rkbC3U_nSY-I_7AeYzw?pwd=2fcr",
                            "xun": "https://pan.xunlei.com/s/VOAaPX149e43IkMi2NqHj-lHA1?pwd=jdkf#",
                            "uc": "https://pan.quark.cn/s/127f1358fca8",
                            "su": "http://su.xu5.cc/post/136.html",
                            "jc": "https://x.xu5.cc/post/426.html"
                        }, {
                            "name": "Photoshop Elements 2023",
                            "url": "https://pan.baidu.com/s/1Wvz8EVA6C1yXHVkF-5Be0Q?pwd=y3ao",
                            "xun": "https://pan.xunlei.com/s/VOAaPYxzDr78N3exXOZWNGYDA1?pwd=wj88#",
                            "uc": "https://pan.quark.cn/s/93e79f7798b5",
                            "su": "http://su.xu5.cc/post/137.html",
                            "jc": "https://x.xu5.cc/post/426.html"
                        }, {
                            "name": "Photoshop Elements 2022",
                            "url": "https://pan.baidu.com/s/1mPsn5rR9jKeOkk_YbpFZQA?pwd=inkw",
                            "xun": "https://pan.xunlei.com/s/VOAaP_kvptIpRc12obM31KVHA1?pwd=mrvx#",
                            "uc": "https://pan.quark.cn/s/4eb6aff5843e",
                            "su": "http://su.xu5.cc/post/138.html",
                            "jc": "https://x.xu5.cc/post/426.html"
                        }, {
                            "name": "Photoshop Elements 2021",
                            "url": "https://pan.baidu.com/s/16mrigjEuKaGVkLp4fl2xwQ?pwd=sh4z",
                            "xun": "https://pan.xunlei.com/s/VOAaPbXSQzDSnT2515fdmEAzA1?pwd=uwtp#",
                            "uc": "https://pan.quark.cn/s/4bc52d3e351d",
                            "su": "http://su.xu5.cc/post/139.html",
                            "jc": "https://x.xu5.cc/post/426.html"
                        }]
                    }, {
                        "title": "Prelude",
                        "icon": "/static/img/icons/Prelude.svg",
                        "nav": [{
                            "name": "Prelude 2022",
                            "url": "https://pan.baidu.com/s/1sRkUeN6Gz3u8TXcX-R3fQg?pwd=uvfy",
                            "xun": "https://pan.xunlei.com/s/VOAaPm8ESN7RdpC7tQ5473-qA1?pwd=ix87#",
                            "uc": "https://pan.quark.cn/s/e8b0a1946590",
                            "su": "http://su.xu5.cc/post/128.html",
                            "jc": "https://x.xu5.cc/post/427.html"
                        }]
                    }, {
                        "title": "Premiere",
                        "icon": "/static/img/icons/premiere.svg",
                        "nav": [{
                            "name": "Premiere 2025",
                            "url": "https://pan.baidu.com/s/169tiNTCSotE6dlqpSAAtGQ?pwd=wp98",
                            "xun": "https://pan.xunlei.com/s/VOAaPy-917p82f1YWXjQffoPA1?pwd=vf5b#",
                            "uc": "https://pan.quark.cn/s/fdbed2cba4cb",
                            "su": "https://su.xu5.cc/post/326.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2024",
                            "url": "https://pan.baidu.com/s/16j3D2DuK0yipLs4Z8RSlXQ?pwd=b85p",
                            "xun": "https://pan.xunlei.com/s/VOAaPzqjf6ylI6WalmkHAYDoA1?pwd=cdqx#",
                            "uc": "https://pan.quark.cn/s/eb4bbc768c2c",
                            "su": "http://su.xu5.cc/post/129.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2023",
                            "url": "https://pan.baidu.com/s/1KE7ncL_KsKDREsS5kcy76A?pwd=38db",
                            "xun": "https://pan.xunlei.com/s/VOAaQ0jvo7HCghBg0Jv7KP1KA1?pwd=fb8q#",
                            "uc": "https://pan.quark.cn/s/fec081eb52be",
                            "su": "http://su.xu5.cc/post/130.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2022",
                            "url": "https://pan.baidu.com/s/1D7xorYXom-MptOEhPRhQIw?pwd=bptp",
                            "xun": "https://pan.xunlei.com/s/VOAaQ2knn8TgItOLGdk1Vt9aA1?pwd=829j#",
                            "uc": "https://pan.quark.cn/s/0f9ea31652d6",
                            "su": "http://su.xu5.cc/post/131.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2021",
                            "url": "https://pan.baidu.com/s/1xwZGifLbnLSw-gIws4THpQ?pwd=tefb",
                            "xun": "https://pan.xunlei.com/s/VOAaQ4vbIPn9DWokIjFlANbtA1?pwd=afsr#",
                            "uc": "https://pan.quark.cn/s/aab7567e7347",
                            "su": "http://su.xu5.cc/post/132.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2020",
                            "url": "https://pan.baidu.com/s/1mDg-QY7Emr_RqHTZPFAyHA?pwd=q4cg",
                            "xun": "https://pan.xunlei.com/s/VOAaQ7Ht_bT-Arqvd0uJW3gVA1?pwd=fjku#",
                            "uc": "https://pan.quark.cn/s/be1b1ee9b175",
                            "su": "http://su.xu5.cc/post/133.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2019",
                            "url": "https://pan.baidu.com/s/13HRtd3_daZfHD1_iYsdaTQ?pwd=je6k",
                            "xun": "https://pan.xunlei.com/s/VOAaQ8xQyDqGmWgHVXSXERMHA1?pwd=cy9r#",
                            "uc": "https://pan.quark.cn/s/529349b25d78",
                            "su": "http://su.xu5.cc/post/134.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }, {
                            "name": "Premiere 2018",
                            "url": "https://pan.baidu.com/s/1q68ANBJuZ7DQJb68rMsFtw?pwd=nfcr",
                            "xun": "https://pan.xunlei.com/s/VOAaQAejDr78N3exXOZWNUK2A1?pwd=s53z#",
                            "uc": "https://pan.quark.cn/s/5a3b9f26dbdb",
                            "su": "http://su.xu5.cc/post/135.html",
                            "jc": "https://x.xu5.cc/post/335.html"
                        }]
                    }, {
                        "title": "Premiere Elements",
                        "icon": "/static/img/icons/PremiereElements.svg",
                        "nav": [{
                            "name": "Premiere Elements 2025",
                            "url": "https://pan.baidu.com/s/1ACN4MfFpGzgSWA9h99JNkg?pwd=u84u",
                            "xun": "https://pan.xunlei.com/s/VOAaQMRYDr78N3exXOZWNZBeA1?pwd=wf6b#",
                            "uc": "https://pan.quark.cn/s/8f1dfea52afc",
                            "su": "https://su.xu5.cc/post/337.html",
                            "jc": "https://x.xu5.cc/post/428.html"
                        }, {
                            "name": "Premiere Elements 2024",
                            "url": "https://pan.baidu.com/s/1qE4S0tyvTTeWz6HYOl-IYg?pwd=7e5n",
                            "xun": "https://pan.xunlei.com/s/VOAaQOrsGPS1tqT-E-IKwma0A1?pwd=e7n2#",
                            "uc": "https://pan.quark.cn/s/c47d13fc8ba2",
                            "su": "http://su.xu5.cc/post/136.html",
                            "jc": "https://x.xu5.cc/post/428.html"
                        }, {
                            "name": "Premiere Elements 2023",
                            "url": "https://pan.baidu.com/s/1GG5KUBcp6S8ZZNQzWWq6EQ?pwd=2jjx",
                            "xun": "https://pan.xunlei.com/s/VOAaQQYI5SM6bch3h_fFMtESA1?pwd=gc6r#",
                            "uc": "https://pan.quark.cn/s/5718a97609f2",
                            "su": "http://su.xu5.cc/post/137.html",
                            "jc": "https://x.xu5.cc/post/428.html"
                        }, {
                            "name": "Premiere Elements 2022",
                            "url": "https://pan.baidu.com/s/1nfeIQCF0LCvsT4i_1NS5AQ?pwd=og3o",
                            "xun": "https://pan.xunlei.com/s/VOAaQSGCXWDu4kivZv7hzHqpA1?pwd=pjzu#",
                            "uc": "https://pan.quark.cn/s/ccaacb2838b8",
                            "su": "http://su.xu5.cc/post/138.html",
                            "jc": "https://x.xu5.cc/post/428.html"
                        }, {
                            "name": "Premiere Elements 2021",
                            "url": "https://pan.baidu.com/s/1TZBc4jH0IjMnN8C_-M5MYQ?pwd=aign",
                            "xun": "https://pan.xunlei.com/s/VOAaQU4YPkfr8DvmexD3cgaZA1?pwd=sgnz#",
                            "uc": "https://pan.quark.cn/s/96d579c798ce",
                            "su": "http://su.xu5.cc/post/139.html",
                            "jc": "https://x.xu5.cc/post/428.html"
                        }]
                    }, {
                        "title": "Substance 3D Painter",
                        "icon": "static/img/icons/pt.svg",
                        "nav": [{
                            "name": "PT 2025 14.0",
                            "url": "https://pan.baidu.com/s/1A8TtKMxtKklwqwCKiVXNPw?pwd=9pjb",
                            "xun": "https://pan.xunlei.com/s/VOAaQp3L7TZlOOUcRUPleZeyA1?pwd=428c#",
                            "uc": "https://pan.quark.cn/s/37179bcaca64",
                            "su": "https://su.xu5.cc/post/333.html",
                            "jc": "https://x.xu5.cc/post/429.html"
                        }, {
                            "name": "PT 10.0.1",
                            "url": "https://pan.baidu.com/s/17pSeJWAL2NjRJS6CELcXOg?pwd=udld",
                            "xun": "https://pan.xunlei.com/s/VOAaQrDUVFzs56Arorr1CZAwA1?pwd=spr9#",
                            "uc": "https://pan.quark.cn/s/8a287553631f",
                            "jc": "https://x.xu5.cc/post/301.html"
                        }, {
                            "name": "PT  9.1.2",
                            "url": "https://pan.baidu.com/s/1c-C9ueofQd0pw5zVk9DV8w?pwd=w2x6",
                            "xun": "https://pan.xunlei.com/s/VOAaQt3KptIpRc12obM31ndvA1?pwd=d5r7#",
                            "uc": "https://pan.quark.cn/s/8c90925c4d62",
                            "jc": "https://x.xu5.cc/post/302.html"
                        }, {
                            "name": "PT  8.3.1",
                            "url": "https://pan.baidu.com/s/1S4CN3p_bfergwxNTXlPTcg?pwd=zt8u",
                            "xun": "https://pan.xunlei.com/s/VOAaQundXWDu4kivZv7hzU35A1?pwd=g29a#",
                            "uc": "https://pan.quark.cn/s/925e053b495f",
                            "jc": "https://x.xu5.cc/post/303.html"
                        }]
                    }]
                }, {
                    "tab": "Adobe|Mac",
                    "list": [{
                        "title": "MAC常见问题",
                        "icon": "",
                        "nav": [{
                            "name": "MAC常见问题",
                            "wenti": "https://x.xu5.cc/post/117.html"
                        }]
                    }, {
                        "title": "Adobe Mac全家桶一键安装版",
                        "icon": "static/img/icons/adobe.svg",
                        "nav": [{
                            "name": "Adobe 2020",
                            "url": "https://pan.baidu.com/s/14is2UIv8iTkRXmbP6AvqfQ?pwd=8nbt",
                            "xun": "https://pan.xunlei.com/s/VOAaRywqgVXbp0dfdIy52qV6A1?pwd=p8rv#",
                            "uc": "https://pan.quark.cn/s/1d85b5da8b55"
                        }, {
                            "name": "Adobe 2019",
                            "url": "https://pan.baidu.com/s/1rWlOWSrLm9Y5uvISOLgC-g?pwd=zxi5",
                            "xun": "https://pan.xunlei.com/s/VOAaS3U03ck8KTQs8urcKyhfA1?pwd=cvbi#",
                            "uc": "https://pan.quark.cn/s/b7959b5ef4bc"
                        }, {
                            "name": "Adobe 2018",
                            "url": "https://pan.baidu.com/s/1-8ok5KW8fzisqrIQ0wYVVg?pwd=sfmq",
                            "xun": "https://pan.xunlei.com/s/VOAaS6QEtkjA9A1wN0h0xsU4A1?pwd=twqf#",
                            "uc": "https://pan.quark.cn/s/49285ccfa170"
                        }]
                    }, {
                        "title": "Acrobat mac",
                        "icon": "static/img/icons/Acrobat_20DC.svg",
                        "nav": [{
                            "name": "Acrobat|mac 2024",
                            "url": "https://pan.baidu.com/s/1XMIx0xA5nktDmQkgpc-wTg?pwd=rwyz",
                            "xun": "https://pan.xunlei.com/s/VOAaSR6ja83B8UJ0t30tSp2xA1?pwd=g5ps#",
                            "uc": "https://pan.quark.cn/s/39dc97593f46",
                            "su": "http://su.xu5.cc/post/147.html"
                        }]
                    }, {
                        "title": "After Effects mac",
                        "icon": "/static/img/icons/after-effects.svg",
                        "nav": [{
                            "name": "After Effects|mac 2025",
                            "xun": "https://pan.xunlei.com/s/VODgEzgsDbpUwzPCXMQ4FAbbA1?pwd=d7t4#"
                        }, {
                            "name": "After Effects|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAaTqI8M8b-PFjZe2mcShMHA1?pwd=mhxd#",
                            "su": "https://su.xu5.cc/post/148.html"
                        }, {
                            "name": "After Effects|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaUIJySN7RdpC7tQ548fn_A1?pwd=bdxr#"
                        }, {
                            "name": "After Effects|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaUKqYGPS1tqT-E-IKyCgDA1?pwd=3akv#"
                        }, {
                            "name": "After Effects|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaZ3ayDr78N3exXOZWQh4TA1?pwd=23nx#"
                        }, {
                            "name": "After Effects|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAaZ5_bQzDSnT2515fdplI1A1?pwd=2wsg#"
                        }]
                    }, {
                        "title": "Animate mac",
                        "icon": "/static/img/icons/animate.svg",
                        "nav": [{
                            "name": "Animate|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAaVNlnpBNPY6MqzPHKeXC1A1?pwd=jvfy#"
                        }, {
                            "name": "Animate|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaVnDr-7-iZ2UpTeLJ3qFGA1?pwd=tvj9#"
                        }, {
                            "name": "Animate|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaVrA1pBNPY6MqzPHKeiyHA1?pwd=thvh#"
                        }, {
                            "name": "Animate|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaWliwo7HCghBg0Jv7MuoTA1?pwd=h3g3#"
                        }]
                    }, {
                        "title": "Audition mac",
                        "icon": "/static/img/icons/audition.svg",
                        "nav": [{
                            "name": "Audition|mac 2025",
                            "xun": "https://pan.xunlei.com/s/VODgEI4owtNXXiCzKrwkDgQOA1?pwd=iyps#"
                        }, {
                            "name": "Audition|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAa_xBaR_r-zZAMhnoG-GJzA1?pwd=qhw4#"
                        }, {
                            "name": "Audition|mac 2021 m1",
                            "xun": "https://pan.xunlei.com/s/VOAaa4AqVFzs56Arorr1GSkzA1?pwd=855g#"
                        }, {
                            "name": "Audition|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaa7nkjqhcVWcsT0HyIDcsA1?pwd=sdf9#"
                        }, {
                            "name": "Audition|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaaBR8m-xVP8CEro5m67uVA1?pwd=fsah#"
                        }, {
                            "name": "Audition|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAaaFJf_bT-Arqvd0uJZy7EA1?pwd=exu6#"
                        }]
                    }, {
                        "title": "Bridge mac",
                        "icon": "/static/img/icons/bridge.svg",
                        "nav": [{
                            "name": "Bridge|mac 2025",
                            "xun": "https://pan.xunlei.com/s/VODgEahpSGdbrVOBEsWBhZa3A1?pwd=tvbw#"
                        }, {
                            "name": "Bridge|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAaaXJCo7HCghBg0Jv7OxITA1?pwd=cw5a#"
                        }, {
                            "name": "Bridge|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaafDX_bT-Arqvd0uJ_5z7A1?pwd=kvms#"
                        }, {
                            "name": "Bridge|mac 2020 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaaj00ivz84wocylJHPMvAA1?pwd=cgxs#"
                        }, {
                            "name": "Bridge|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaapHca83B8UJ0t30tWTdgA1?pwd=3nii#"
                        }, {
                            "name": "Bridge|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaasLa17p82f1YWXjQkHCEA1?pwd=d2dg#"
                        }]
                    }, {
                        "title": "Character Animator mac",
                        "icon": "/static/img/icons/character-animator.svg",
                        "nav": [{
                            "name": "Character Animator|mac 2025",
                            "xun": "https://pan.xunlei.com/s/VODgE2BhO6a-Op5jkaPqYApmA1?pwd=epr8#"
                        }, {
                            "name": "Character Animator|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAabdztPkfr8DvmexD3hLgWA1?pwd=aga2#"
                        }, {
                            "name": "Character Animator|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAablBlm-xVP8CEro5m6iyAA1?pwd=kh8u#"
                        }, {
                            "name": "Character Animator|mac 2020 M1",
                            "xun": "https://pan.xunlei.com/s/VOAabphU3ck8KTQs8urcPBJiA1?pwd=6n9j#"
                        }, {
                            "name": "Character Animator|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAabsySc5vCQsfuW8UvAZ0bA1?pwd=pnte#"
                        }, {
                            "name": "Character Animator|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAabw1gtkjA9A1wN0h10w5WA1?pwd=x3e6#"
                        }, {
                            "name": "Character Animator|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAaby3A-7-iZ2UpTeLJ6fKtA1?pwd=cn24#"
                        }]
                    }, {
                        "title": "Dimension mac",
                        "icon": "static/img/icons/dimension.svg",
                        "nav": [{
                            "name": "Dimension|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAady36a83B8UJ0t30tXfJmA1?pwd=g4uf#"
                        }, {
                            "name": "Dimension|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAae51LVvZnyQgLfpmCKC1cA1?pwd=hzx8#"
                        }, {
                            "name": "Dimension|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaeB7ETZUEL58Uh04DNk8zA1?pwd=kw4y#"
                        }]
                    }, {
                        "title": "Dreamweaver mac",
                        "icon": "/static/img/icons/dreamweaver.svg",
                        "nav": [{
                            "name": "Dreamweaver|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaeXkeptIpRc12obM36zu3A1?pwd=8tyj#"
                        }, {
                            "name": "Dreamweaver|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaebp3a83B8UJ0t30tXup6A1?pwd=ybdf#"
                        }, {
                            "name": "Dreamweaver|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaeo0K9e43IkMi2NqHozcXA1?pwd=55nf#"
                        }, {
                            "name": "Dreamweaver|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAaer7ZIPn9DWokIjFlGfZhA1?pwd=br2k#"
                        }]
                    }, {
                        "title": "illustrator mac",
                        "icon": "/static/img/icons/illustrator.svg",
                        "nav": [{
                            "name": "illustrator|mac 2025",
                            "xun": "https://pan.xunlei.com/s/VODgA8fsdl_ivAZDIG6zB9nJA1?pwd=bhs4#"
                        }, {
                            "name": "illustrator|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAafH3EVFzs56Arorr1ISNOA1?pwd=jh2v#",
                            "su": "https://su.xu5.cc/post/153.html"
                        }, {
                            "name": "illustrator|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAafOxbVvZnyQgLfpmCKd7MA1?pwd=iug5#"
                        }, {
                            "name": "illustrator|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAafSTvDr78N3exXOZWU0kjA1?pwd=hqwi#"
                        }, {
                            "name": "illustrator|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAafViQTGvLpavAUvhf0_B7A1?pwd=qq8g#"
                        }, {
                            "name": "illustrator|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAafXfiTZUEL58Uh04DODtmA1?pwd=gct4#"
                        }]
                    }, {
                        "title": "InCopy mac",
                        "icon": "/static/img/icons/incopy.svg",
                        "nav": [{
                            "name": "InCopy|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAagBmWDr78N3exXOZWUI-RA1?pwd=u2sn#"
                        }, {
                            "name": "InCopy|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAagJ_tptIpRc12obM37akbA1?pwd=qmf3#"
                        }, {
                            "name": "InCopy|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAagMNspBNPY6MqzPHKj6xYA1?pwd=scu6#"
                        }, {
                            "name": "InCopy|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAagP3DXWDu4kivZv7i4m-kA1?pwd=tj2x#"
                        }]
                    }, {
                        "title": "InDesign mac",
                        "icon": "/static/img/icons/indesign.svg",
                        "nav": [{
                            "name": "InDesign|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAaizQQyDqGmWgHVXSXMXbBA1?pwd=x4a4#"
                        }, {
                            "name": "InDesign|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAaj5UfGONOT7lMRvzF3SxaA1?pwd=ge7z#"
                        }, {
                            "name": "InDesign|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAaj8ASm-xVP8CEro5m9bj0A1?pwd=7q2c#"
                        }, {
                            "name": "InDesign|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAajAZMa83B8UJ0t30tZuU6A1?pwd=7bhe#"
                        }, {
                            "name": "InDesign|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAajEeR3PGiBhN4CQQ7q4cOA1?pwd=ymr2#"
                        }]
                    }, {
                        "title": "Lightroom Classic mac",
                        "icon": "/static/img/icons/lightroom-classic.svg",
                        "nav": [{
                            "name": "Lightroom|mac 14.0.1",
                            "xun": "https://pan.xunlei.com/s/VODg9aM_UaMf0noeAimoanp-A1?pwd=cbu6#"
                        }, {
                            "name": "Lightroom|mac 13.0",
                            "xun": "https://pan.xunlei.com/s/VOAajc6z7TZlOOUcRUPlm2NJA1?pwd=2krn#"
                        }, {
                            "name": "Lightroom|mac 12.4",
                            "xun": "https://pan.xunlei.com/s/VOAajwK3m-xVP8CEro5m9sn9A1?pwd=85cp#"
                        }, {
                            "name": "Lightroom|mac 10.3 M1",
                            "xun": "https://pan.xunlei.com/s/VOAak-Nd7TZlOOUcRUPlmBMBA1?pwd=3und#"
                        }, {
                            "name": "Lightroom|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAak6c8tkjA9A1wN0h13xxYA1?pwd=tcic#"
                        }, {
                            "name": "Lightroom|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAakBzTo7HCghBg0Jv7Sh1PA1?pwd=y22b#"
                        }]
                    }, {
                        "title": "Midea Encoder mac",
                        "icon": "/static/img/icons/media-encoder.svg",
                        "nav": [{
                            "name": "Midea Encoder|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAakUwBLozyClXaX8k5ETv3A1?pwd=x9h6#"
                        }, {
                            "name": "Midea Encoder|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAakbr8QzDSnT2515fduDWeA1?pwd=q2pz#"
                        }, {
                            "name": "Midea Encoder|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAakfzr9e43IkMi2NqHrL9DA1?pwd=m9x4#"
                        }, {
                            "name": "Midea Encoder|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAakizeTZUEL58Uh04DQGc0A1?pwd=df5r#"
                        }, {
                            "name": "Midea Encoder|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAaklxLtkjA9A1wN0h14AF6A1?pwd=j768#"
                        }]
                    }, {
                        "title": "Photoshop mac",
                        "icon": "/static/img/icons/photoshop.svg",
                        "nav": [{
                            "name": "Photoshop|mac 2025V26.1",
                            "xun": "https://pan.xunlei.com/s/VODg5xeAEKqQO88_QWNTU-KOA1?pwd=rptu#"
                        }, {
                            "name": "Photoshop|mac 2024V25.11",
                            "xun": "https://pan.xunlei.com/s/VOAalPTQVFzs56Arorr1KbBIA1?pwd=vdxs#",
                            "su": "https://su.xu5.cc/post/310.html"
                        }, {
                            "name": "Photoshop|mac 2024V25.7",
                            "xun": "https://pan.xunlei.com/s/VOAalT6hDr78N3exXOZWWDsiA1?pwd=rcth#",
                            "su": "https://su.xu5.cc/post/158.html"
                        }, {
                            "name": "Photoshop|mac 2021",
                            "xun": "https://pan.xunlei.com/s/VOAalYwuLozyClXaX8k5EtH6A1?pwd=zinw#"
                        }, {
                            "name": "Photoshop|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAalfvsCOoU9K0ODnf29BxeA1?pwd=ysyf#"
                        }, {
                            "name": "Photoshop|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAaljO6ivz84wocylJHTIdoA1?pwd=jryu#"
                        }, {
                            "name": "Photoshop|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAalnhKc5vCQsfuW8UvEQTlA1?pwd=p9fk#"
                        }]
                    }, {
                        "title": "Prelude mac",
                        "icon": "/static/img/icons/Prelude.svg",
                        "nav": [{
                            "name": "Prelude|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAamCTwgVXbp0dfdIy5BBf2A1?pwd=vg3q#"
                        }, {
                            "name": "Prelude|mac 2020 M1",
                            "xun": "https://pan.xunlei.com/s/VOAamIF1COoU9K0ODnf29Q0vA1?pwd=8ui5#"
                        }, {
                            "name": "Prelude|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAamKkG9e43IkMi2NqHryfRA1?pwd=3isw#"
                        }, {
                            "name": "Prelude|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAamO-B_bT-Arqvd0uJdWKqA1?pwd=3923#"
                        }, {
                            "name": "Prelude|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAamS3vXWDu4kivZv7i74gZA1?pwd=r4sr#"
                        }]
                    }, {
                        "title": "Premiere mac",
                        "icon": "/static/img/icons/premiere.svg",
                        "nav": [{
                            "name": "Premiere|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAamdNVPkfr8DvmexD3lYMpA1?pwd=xv7w#"
                        }, {
                            "name": "Premiere|mac 2021 M1",
                            "xun": "https://pan.xunlei.com/s/VOAamnDBtkjA9A1wN0h14putA1?pwd=w2pb#"
                        }, {
                            "name": "Premiere|mac 2020",
                            "xun": "https://pan.xunlei.com/s/VOAamqLBm-xVP8CEro5mAs8wA1?pwd=e3g7#"
                        }, {
                            "name": "Premiere|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAamwra-7-iZ2UpTeLJAsORA1?pwd=uws4#"
                        }, {
                            "name": "Premiere|mac 2018",
                            "xun": "https://pan.xunlei.com/s/VOAamzNi3ck8KTQs8urcT5_DA1?pwd=sfaj#"
                        }]
                    }, {
                        "title": "Adobe XD mac",
                        "icon": "/static/img/icons/xd.svg",
                        "nav": [{
                            "name": "XD|mac 2024",
                            "xun": "https://pan.xunlei.com/s/VOAanRIkXWDu4kivZv7i7NaKA1?pwd=7ipn#"
                        }, {
                            "name": "XD|mac 2021",
                            "xun": "https://pan.xunlei.com/s/VOAan__pCOoU9K0ODnf29r6sA1?pwd=7nva#"
                        }, {
                            "name": "XD|mac 2019",
                            "xun": "https://pan.xunlei.com/s/VOAanbshc5vCQsfuW8UvF2h0A1?pwd=gk63#"
                        }]
                    }]
                }, {
                    "tab": "三维动画",
                    "icon": "",
                    "list": [{
                        "title": "3Dmax",
                        "icon": "static/img/icons/3DSMax.svg",
                        "nav": [{
                            "name": "3Dmax 2025",
                            "url": "https://pan.baidu.com/s/1dV-Gsmu0NSKijMCDOZgRNg?pwd=kpje",
                            "xun": "https://pan.xunlei.com/s/VOAg1naGIPn9DWokIjFnIhklA1?pwd=p49k#",
                            "uc": "https://pan.quark.cn/s/1f3648f16030",
                            "su": "https://su.xu5.cc/post/185.html",
                            "jc": "https://x.xu5.cc/post/14.html"
                        }, {
                            "name": "3Dmax 2024",
                            "url": "https://pan.baidu.com/s/1pFm4F0yH2jn0yFT07W5K3Q?pwd=57gq",
                            "xun": "https://pan.xunlei.com/s/VOAg1sf7_bT-Arqvd0uLfQ0iA1?pwd=phgb#",
                            "uc": "https://pan.quark.cn/s/b18c69096e47",
                            "jc": "https://x.xu5.cc/post/16.html",
                            "su": "https://su.xu5.cc/post/186.html"
                        }, {
                            "name": "3Dmax 2023",
                            "url": "https://pan.baidu.com/s/1UTKJ-34gFwqbf6w9TOBC-A?pwd=ndq7",
                            "xun": "https://pan.xunlei.com/s/VOAg1v3O9e43IkMi2NqJqsCQA1?pwd=gt7p#",
                            "uc": "https://pan.quark.cn/s/b70a5b7e4610",
                            "su": "https://su.xu5.cc/post/187.html",
                            "jc": "https://x.xu5.cc/post/16.html"
                        }, {
                            "name": "3Dmax 2022",
                            "url": "https://pan.baidu.com/s/1049QcXYdLY2BAHi8a_r2Tw?pwd=2xen",
                            "xun": "https://pan.xunlei.com/s/VOAg1zUAPkfr8DvmexD5p43YA1?pwd=e9tf#",
                            "uc": "https://pan.quark.cn/s/e937fc262ee4",
                            "su": "https://su.xu5.cc/post/188.html",
                            "jc": "https://x.xu5.cc/post/84.html"
                        }, {
                            "name": "3Dmax 2021",
                            "url": "https://pan.baidu.com/s/1poIz1adrCmOHb1lMJmJLQQ?pwd=to06",
                            "xun": "https://pan.xunlei.com/s/VOAg219ia83B8UJ0t30vaofXA1?pwd=cbip#",
                            "uc": "https://pan.quark.cn/s/f49d17a349a3",
                            "su": "https://su.xu5.cc/post/189.html",
                            "jc": "https://x.xu5.cc/post/85.html"
                        }, {
                            "name": "3Dmax 2020",
                            "url": "https://pan.baidu.com/s/1BsMuB5zON4IqPy8q-REoDg?pwd=ljec",
                            "xun": "https://pan.xunlei.com/s/VOAg23VDpBNPY6MqzPHMl3zMA1?pwd=snxx#",
                            "uc": "https://pan.quark.cn/s/6c40b23c7e22",
                            "su": "https://su.xu5.cc/post/190.html",
                            "jc": "https://x.xu5.cc/post/86.html"
                        }, {
                            "name": "3Dmax 2019",
                            "url": "https://pan.baidu.com/s/1LCvSzgjxwm3BV_CPFK6tvw?pwd=4bue",
                            "xun": "https://pan.xunlei.com/s/VOAg2GPVLozyClXaX8k7PCn2A1?pwd=ec9p#",
                            "uc": "https://pan.quark.cn/s/0472c3939873",
                            "su": "https://su.xu5.cc/post/191.html",
                            "jc": "https://x.xu5.cc/post/87.html"
                        }, {
                            "name": "3Dmax 2018",
                            "url": "https://pan.baidu.com/s/1wHk5lgr5OrtdSZIwoSoUqg?pwd=ate0",
                            "xun": "https://pan.xunlei.com/s/VOAg2J6NLozyClXaX8k7PDkgA1?pwd=nurf#",
                            "uc": "https://pan.quark.cn/s/50de5551c828",
                            "su": "https://su.xu5.cc/post/192.html",
                            "jc": "https://x.xu5.cc/post/88.html"
                        }, {
                            "name": "3Dmax安装常见错误修复工具",
                            "url": "https://pan.baidu.com/s/1bGYuIDctv4rjBnUCOwlG6Q?pwd=yztp",
                            "xun": "https://pan.xunlei.com/s/VOAg2nO5R_r-zZAMhnoI5567A1?pwd=xjge#",
                            "uc": "https://pan.quark.cn/s/108e28225ab1"
                        }]
                    }, {
                        "title": "Cinema4D C4D",
                        "icon": "static/img/icons/CINEMA_204D.svg",
                        "nav": [{
                            "name": "C4D 2025.1.1",
                            "xun": "https://pan.xunlei.com/s/VOFF5BdMxO__ALcum-efvVY0A1?pwd=urpv#",
                            "uc": "https://pan.quark.cn/s/f845e99d551d"
                        }, {
                            "name": "C4D 2025",
                            "url": "https://pan.baidu.com/s/1xvN82VukPUh7XwrNtTWFmw?pwd=3rbf",
                            "xun": "https://pan.xunlei.com/s/VOAaroufo7HCghBg0Jv7VJoyA1?pwd=naic#",
                            "uc": "https://pan.quark.cn/s/cf0a161b9fe3",
                            "su": "https://su.xu5.cc/post/330.html",
                            "jc": "https://x.xu5.cc/post/337.html"
                        }, {
                            "name": "C4D 2024",
                            "url": "https://pan.baidu.com/s/1T9ERoxAFygSyYwQoNz3SDg?pwd=usvq",
                            "xun": "https://pan.xunlei.com/s/VOAas1GEgVXbp0dfdIy5D6Y9A1?pwd=6q7c#",
                            "uc": "https://pan.quark.cn/s/2244d8a61a26",
                            "su": "https://su.xu5.cc/post/266.html",
                            "jc": "https://x.xu5.cc/post/24.html"
                        }, {
                            "name": "C4D 2023",
                            "url": "https://pan.baidu.com/s/1lBDFw_jC-E2UIXyvpnt--Q?pwd=w16p",
                            "xun": "https://pan.xunlei.com/s/VOAas3N0GPS1tqT-E-IL62a9A1?pwd=kpb2#",
                            "uc": "https://pan.quark.cn/s/152d39189396",
                            "su": "https://su.xu5.cc/post/267.html",
                            "jc": "https://x.xu5.cc/post/140.html"
                        }, {
                            "name": "C4D S25",
                            "url": "https://pan.baidu.com/s/1lLLqt_g40MUZ4SYoQqeI_g?pwd=txas",
                            "xun": "https://pan.xunlei.com/s/VOAas6mcTZUEL58Uh04DSwd7A1?pwd=faif#",
                            "uc": "https://pan.quark.cn/s/2e852f714bb6",
                            "su": "https://su.xu5.cc/post/268.html",
                            "jc": "https://x.xu5.cc/post/127.html"
                        }, {
                            "name": "C4D S24",
                            "url": "https://pan.baidu.com/s/1dS0PZPcpagWq9PdCUsCqnA?pwd=8rm0",
                            "xun": "https://pan.xunlei.com/s/VOAas9E8gVXbp0dfdIy5D8ncA1?pwd=fjbi#",
                            "uc": "https://pan.quark.cn/s/20b68c06d241",
                            "su": "https://su.xu5.cc/post/269.html",
                            "jc": "https://x.xu5.cc/post/128.html"
                        }, {
                            "name": "C4D S22",
                            "url": "https://pan.baidu.com/s/1VjJp7WcUEIgWplusbxp6aQ?pwd=5sy7",
                            "xun": "https://pan.xunlei.com/s/VOAasCAEc5vCQsfuW8UvGjb3A1?pwd=e595#",
                            "uc": "https://pan.quark.cn/s/15ca660372ba",
                            "su": "https://su.xu5.cc/post/270.html",
                            "jc": "https://x.xu5.cc/post/129.html"
                        }, {
                            "name": "C4D r21",
                            "url": "https://pan.baidu.com/s/16PHZ6nrbQ_fg34gJfU2xGw?pwd=kfb7",
                            "xun": "https://pan.xunlei.com/s/VOAasGLnjqhcVWcsT0HyOo4mA1?pwd=gncv#",
                            "uc": "https://pan.quark.cn/s/e13b062de746",
                            "su": "https://su.xu5.cc/post/271.html",
                            "jc": "https://x.xu5.cc/post/130.html"
                        }, {
                            "name": "C4D r20",
                            "url": "https://pan.baidu.com/s/1KkivCItirrypFbisWIxryw?pwd=90c1",
                            "xun": "https://pan.xunlei.com/s/VOAasIsen8TgItOLGdk1fQIKA1?pwd=qa7r#",
                            "uc": "https://pan.quark.cn/s/d44e5d9f978d",
                            "su": "https://su.xu5.cc/post/272.html",
                            "jc": "https://x.xu5.cc/post/131.html"
                        }, {
                            "name": "C4D r19",
                            "url": "https://pan.baidu.com/s/1A3I_BRjPTl32EuHCbNi6Ag?pwd=f6vw",
                            "xun": "https://pan.xunlei.com/s/VOAasLPCXWDu4kivZv7i93a2A1?pwd=dqs3#",
                            "uc": "https://pan.quark.cn/s/d2f21c5851a2",
                            "su": "https://su.xu5.cc/post/273.html",
                            "jc": "https://x.xu5.cc/post/132.html"
                        }, {
                            "name": "C4D r18",
                            "url": "https://pan.baidu.com/s/110U-5wqom4q1P-0-A4KF-w?pwd=dlia",
                            "xun": "https://pan.xunlei.com/s/VOAasOB8I5tWX5IfBjXb--PdA1?pwd=4wqw#",
                            "uc": "https://pan.quark.cn/s/688681c6adc1",
                            "su": "https://su.xu5.cc/post/274.html",
                            "jc": "https://x.xu5.cc/post/133.html"
                        }]
                    }, {
                        "title": "Cinema4D C4D|MAC版",
                        "icon": "static/img/icons/CINEMA_204D.svg",
                        "nav": [{
                            "name": "C4D 2024|mac",
                            "url": "https://pan.baidu.com/s/1b1S5rYzhOgOQrooL1tTxVA?pwd=1d8m",
                            "xun": "https://pan.xunlei.com/s/VOAasptZivz84wocylJHVr2qA1?pwd=xedp#",
                            "uc": "https://pan.quark.cn/s/398e6197b776",
                            "su": "https://su.xu5.cc/post/279.html",
                            "jc": "https://x.xu5.cc/post/138.html"
                        }, {
                            "name": "C4D 2023|mac",
                            "url": "https://pan.baidu.com/s/1Qdb_0WQeFdN78vtJC-fPkw?pwd=882x",
                            "xun": "https://pan.xunlei.com/s/VOAasrutVvZnyQgLfpmCPMNCA1?pwd=x3ke#",
                            "uc": "https://pan.quark.cn/s/60061ed2e03e",
                            "su": "https://su.xu5.cc/post/280.html",
                            "jc": "https://x.xu5.cc/post/139.html"
                        }]
                    }, {
                        "title": "Rhino ceros",
                        "icon": "static/img/icons/Rhinoceros.svg",
                        "nav": [{
                            "name": "Rhino 8.14",
                            "xun": "https://pan.xunlei.com/s/VOFF6I3Ie4XAqG0QOjWHstd0A1?pwd=bnvz#",
                            "uc": "https://pan.quark.cn/s/157515f931f4"
                        }, {
                            "name": "Rhino 8.12",
                            "xun": "https://pan.xunlei.com/s/VOAls_j-R_r-zZAMhnoKPDp4A1?pwd=7e4w#",
                            "uc": "https://pan.quark.cn/s/4b90dcc20cfb",
                            "jc": "https://x.xu5.cc/post/432.html"
                        }, {
                            "name": "Rhino 8.9",
                            "url": "https://pan.baidu.com/s/1HEt0nl9gVAc3NIRXbdZjAQ?pwd=zps7",
                            "xun": "https://pan.xunlei.com/s/VOAaq_lwM8b-PFjZe2mca7XuA1?pwd=unw2#",
                            "uc": "https://pan.quark.cn/s/1cf4fa813e99",
                            "jc": "https://x.xu5.cc/post/297.html"
                        }, {
                            "name": "Rhino 8.7",
                            "url": "https://pan.baidu.com/s/1y9088_dGJ7_OkubHv4xX5Q?pwd=bjfx",
                            "xun": "https://pan.xunlei.com/s/VOAaqdKY5SM6bch3h_fFXGQuA1?pwd=m8rz#",
                            "uc": "https://pan.quark.cn/s/d8a137e079c3",
                            "jc": "https://x.xu5.cc/post/295.html"
                        }, {
                            "name": "Rhino 8.6",
                            "url": "https://pan.baidu.com/s/1gEhruxSaCzWQbEHtbzHeLg?pwd=rjfm",
                            "xun": "https://pan.xunlei.com/s/VOAaqfqLIPn9DWokIjFlKpkdA1?pwd=bp9p#",
                            "uc": "https://pan.quark.cn/s/68b0b9475e60",
                            "jc": "https://x.xu5.cc/post/298.html"
                        }, {
                            "name": "Rhino 8.2",
                            "url": "https://pan.baidu.com/s/1185ebCZtZBspzSS_oVccAg?pwd=7fz5",
                            "xun": "https://pan.xunlei.com/s/VOAaqi03GPS1tqT-E-IL5__EA1?pwd=xdr6#",
                            "uc": "https://pan.quark.cn/s/cb8a48437761",
                            "jc": "https://x.xu5.cc/post/300.html"
                        }, {
                            "name": "Rhino 8.0",
                            "url": "https://pan.baidu.com/s/1nzJNokO0rJzfaDR_cI-bSQ?pwd=dzxj",
                            "xun": "https://pan.xunlei.com/s/VOAaqlru-7-iZ2UpTeLJCN26A1?pwd=xcyq#",
                            "uc": "https://pan.quark.cn/s/39cc144a047a",
                            "jc": "https://x.xu5.cc/post/299.html"
                        }, {
                            "name": "Rhino 7.4",
                            "url": "https://pan.baidu.com/s/1YNAhKkCFMlzv1Vw0TuD4Rg?pwd=axhq",
                            "xun": "https://pan.xunlei.com/s/VOAaqoYRGONOT7lMRvzF65klA1?pwd=r5gc#",
                            "uc": "https://pan.quark.cn/s/4445c71aa264",
                            "jc": "https://x.xu5.cc/post/143.html"
                        }]
                    }, {
                        "title": "Rhino ceros|mac版",
                        "icon": "static/img/icons/Rhinoceros.svg",
                        "nav": [{
                            "name": "Rhino 8.9",
                            "url": "https://pan.baidu.com/s/1pVN1oact0Jq_2s4-62nnmQ?pwd=znb4",
                            "xun": "https://pan.xunlei.com/s/VOAarOeJtclRAp6ajwwdwEkkA1?pwd=ddh2#",
                            "uc": "https://pan.quark.cn/s/64b38160ceaf",
                            "jc": "https://x.xu5.cc/post/296.html"
                        }, {
                            "name": "Rhino 8.6",
                            "url": "https://pan.baidu.com/s/19-pw5_wZc4ExvUaRrP4zgg?pwd=na5c",
                            "xun": "https://pan.xunlei.com/s/VOAarQyX3ck8KTQs8urcUn0YA1?pwd=2isq#",
                            "uc": "https://pan.quark.cn/s/bceef115bfa8",
                            "jc": "https://x.xu5.cc/post/296.html"
                        }, {
                            "name": "Rhino 8.2",
                            "url": "https://pan.baidu.com/s/1I8YVi80F7KuAPVMB62FvXg?pwd=4qax",
                            "xun": "https://pan.xunlei.com/s/VOAarSx3c5vCQsfuW8UvGQm9A1?pwd=esjc#",
                            "uc": "https://pan.quark.cn/s/4bca2f0898da",
                            "jc": "https://x.xu5.cc/post/296.html"
                        }, {
                            "name": "Rhino 8.0",
                            "url": "https://pan.baidu.com/s/17Q0635qg0PtqjIyFzdvIfQ?pwd=s43u",
                            "xun": "https://pan.xunlei.com/s/VOAarV4AGPS1tqT-E-IL5rpaA1?pwd=jdwh#",
                            "uc": "https://pan.quark.cn/s/59ffabb8f263",
                            "jc": "https://x.xu5.cc/post/296.html"
                        }, {
                            "name": "Rhino 7.25",
                            "url": "https://pan.baidu.com/s/1fJnkWNBDuhZTRGIvczL-Pw?pwd=iz6a",
                            "xun": "https://pan.xunlei.com/s/VOAarXLg17p82f1YWXjQqPeLA1?pwd=t844#",
                            "uc": "https://pan.quark.cn/s/be29b93e4bdf",
                            "jc": "https://x.xu5.cc/post/296.html"
                        }]
                    }, {
                        "title": "Autodesk Maya",
                        "icon": "static/img/icons/MAYA.svg",
                        "nav": [{
                            "name": "MAYA 2025",
                            "url": "https://pan.baidu.com/s/1o2yKieeEAKppWFqoGTy_Ug?pwd=60cj",
                            "xun": "https://pan.xunlei.com/s/VOAbwVAp3ck8KTQs8urctEY0A1?pwd=wgwh#",
                            "uc": "https://pan.quark.cn/s/911872d194b8",
                            "jc": "https://x.xu5.cc/post/433.html"
                        }, {
                            "name": "MAYA 2024",
                            "url": "https://pan.baidu.com/s/1SsUyibXTfg2_AFWZCKxZLQ?pwd=o1dx",
                            "xun": "https://pan.xunlei.com/s/VOAbwX3ijqhcVWcsT0HynRcbA1?pwd=4d9x#",
                            "uc": "https://pan.quark.cn/s/ab8825c4f933"
                        }, {
                            "name": "MAYA 2023",
                            "url": "https://pan.baidu.com/s/1gx8Tc4MwY75AEVDdOXFCcg?pwd=441e",
                            "xun": "https://pan.xunlei.com/s/VOAbwZ6FLozyClXaX8k5hjl2A1?pwd=x2g5#",
                            "uc": "https://pan.quark.cn/s/a734f9fb53eb"
                        }, {
                            "name": "MAYA 2022",
                            "url": "https://pan.baidu.com/s/19sbJV2pqm2MHyJNkkcfSOA?pwd=s780",
                            "xun": "https://pan.xunlei.com/s/VOAbwcCxc5vCQsfuW8UveutVA1?pwd=3h3a#",
                            "uc": "https://pan.quark.cn/s/e30c77940b77",
                            "jc": "https://x.xu5.cc/post/146.html"
                        }, {
                            "name": "MAYA 2021",
                            "url": "https://pan.baidu.com/s/1zHnblq0nAJ7q6u8Gj7zZdQ?pwd=fzkr",
                            "xun": "https://pan.xunlei.com/s/VOAbweXrVFzs56Arorr1lz-iA1?pwd=3v5q#",
                            "uc": "https://pan.quark.cn/s/33b40f83631f",
                            "jc": "https://x.xu5.cc/post/147.html"
                        }, {
                            "name": "MAYA 2020",
                            "url": "https://pan.baidu.com/s/1ohCPACaWwy7274oZr5Qc2A?pwd=6nng",
                            "xun": "https://pan.xunlei.com/s/VOAbwgUntkjA9A1wN0h1WmLgA1?pwd=hrcf#",
                            "uc": "https://pan.quark.cn/s/a1d1a01ce0d6",
                            "jc": "https://x.xu5.cc/post/148.html"
                        }, {
                            "name": "MAYA 2019",
                            "url": "https://pan.baidu.com/s/1Kk5ciYW1TG3o9nlPGLb4mA?pwd=0447",
                            "xun": "https://pan.xunlei.com/s/VOAbwiNJXWDu4kivZv7iYa0DA1?pwd=s5mf#",
                            "uc": "https://pan.quark.cn/s/cfacc5a65130",
                            "jc": "https://x.xu5.cc/post/149.html"
                        }, {
                            "name": "MAYA 2018",
                            "url": "https://pan.baidu.com/s/1ass19LSpVqQ4CcHhe08mpQ?pwd=p79s",
                            "xun": "https://pan.xunlei.com/s/VOAbwkS3SN7RdpC7tQ54gsiIA1?pwd=2xpi#",
                            "uc": "https://pan.quark.cn/s/a6df558eef25",
                            "jc": "https://x.xu5.cc/post/150.html"
                        }]
                    }, {
                        "title": "Autodesk Maya|mac版",
                        "icon": "static/img/icons/MAYA.svg",
                        "nav": [{
                            "name": "MAYA 2025|mac",
                            "url": "https://pan.baidu.com/s/1o2nSsoTfPfEbnn_AZcurUg?pwd=r1u7",
                            "xun": "https://pan.xunlei.com/s/VOAbx9XCo7HCghBg0Jv7uGlOA1?pwd=338i#",
                            "uc": "https://pan.quark.cn/s/e0f48dc9d6ad"
                        }]
                    }, {
                        "title": "Zbrush",
                        "icon": "static/img/icons/Zbrush.svg",
                        "nav": [{
                            "name": "Zbrush 2025",
                            "url": "https://pan.baidu.com/s/1KI0s1n_QP1S6XQWFVi0zUA?pwd=pqf2",
                            "xun": "https://pan.xunlei.com/s/VOAbBI0p_bT-Arqvd0uJm7MXA1?pwd=rpdh#",
                            "uc": "https://pan.quark.cn/s/4f28aa627d38",
                            "su": "https://su.xu5.cc/post/338.html",
                            "jc": "https://x.xu5.cc/post/434.html"
                        }, {
                            "name": "Zbrush 2024",
                            "url": "https://pan.baidu.com/s/1wJnic9jywTeo7Zsx622qRw?pwd=ytbb",
                            "xun": "https://pan.xunlei.com/s/VOAbBK-oXWDu4kivZv7iG1RgA1?pwd=wfan#",
                            "uc": "https://pan.quark.cn/s/8f8663a0528f",
                            "jc": "https://x.xu5.cc/post/311.html"
                        }, {
                            "name": "Zbrush 2023",
                            "url": "https://pan.baidu.com/s/1teSlV01w4DrJrbbOB656Uw?pwd=wk58",
                            "xun": "https://pan.xunlei.com/s/VOAbBLwJ17p82f1YWXjQx2OXA1?pwd=5u7r#",
                            "uc": "https://pan.quark.cn/s/f2b9adb17bed",
                            "jc": "https://x.xu5.cc/post/312.html"
                        }, {
                            "name": "Zbrush 2022",
                            "url": "https://pan.baidu.com/s/1P7a89cby5Alv7nydhaY-_A?pwd=9pev",
                            "xun": "https://pan.xunlei.com/s/VOAbBOE7gVXbp0dfdIy5K3c_A1?pwd=t7jc#",
                            "uc": "https://pan.quark.cn/s/8d13814a9945",
                            "jc": "https://x.xu5.cc/post/313.html"
                        }, {
                            "name": "Zbrush 2021",
                            "url": "https://pan.baidu.com/s/1Q4MWki4XuulHTQ9zEv8XNg?pwd=ccn4",
                            "xun": "https://pan.xunlei.com/s/VOAbBQI_Dr78N3exXOZWeQsQA1?pwd=2vd3#",
                            "uc": "https://pan.quark.cn/s/6e9e455631a5",
                            "jc": "https://x.xu5.cc/post/314.html"
                        }]
                    }, {
                        "title": "Zbrush|mac版",
                        "icon": "static/img/icons/Zbrush.svg",
                        "nav": [{
                            "name": "Zbrush|mac 2024",
                            "url": "https://pan.baidu.com/s/1N_mVjN_T9BUmKKe43f4F_Q?pwd=y53x",
                            "xun": "https://pan.xunlei.com/s/VOAbBfUD3PGiBhN4CQQ8-28wA1?pwd=fjyv#",
                            "uc": "https://pan.quark.cn/s/8c463b90fc55",
                            "jc": "https://x.xu5.cc/post/315.html"
                        }, {
                            "name": "Zbrush|mac 2023",
                            "url": "https://pan.baidu.com/s/1AhjzsCJRJsxW3aTbinuMow?pwd=ikct",
                            "xun": "https://pan.xunlei.com/s/VOAbBhHR3PGiBhN4CQQ8-2WSA1?pwd=qge2#",
                            "uc": "https://pan.quark.cn/s/125dfb7ee14f",
                            "jc": "https://x.xu5.cc/post/316.html"
                        }, {
                            "name": "Zbrush|mac 2022",
                            "url": "https://pan.baidu.com/s/1OxnAairE5ZRPuWQA7URsBg?pwd=hger",
                            "xun": "https://pan.xunlei.com/s/VOAbBjFt7TZlOOUcRUPlwF9oA1?pwd=qkwg#",
                            "uc": "https://pan.quark.cn/s/d6b53af3b0aa",
                            "jc": "https://x.xu5.cc/post/317.html"
                        }, {
                            "name": "Zbrush|mac 2021",
                            "url": "https://pan.baidu.com/s/1XNJ8h1nHUYC9Eu7rIr0DcQ?pwd=qwiu",
                            "xun": "https://pan.xunlei.com/s/VOAbBlIQVFzs56Arorr1Ts4dA1?pwd=r5ug#",
                            "uc": "https://pan.quark.cn/s/2edbfc4f3e26",
                            "jc": "https://x.xu5.cc/post/318.html"
                        }]
                    }, {
                        "title": "Mari",
                        "icon": "static/img/icons/Mari.svg",
                        "nav": [{
                            "name": "Mari 7.0",
                            "url": "https://pan.baidu.com/s/1kRj6KH-anh1SUwZiZ-FjRw?pwd=pm0m",
                            "xun": "https://pan.xunlei.com/s/VOAbxqc6IPn9DWokIjFlkJ1mA1?pwd=efvk#",
                            "uc": "https://pan.quark.cn/s/78ca3f9fd2ad",
                            "jc": "https://x.xu5.cc/post/280.html"
                        }, {
                            "name": "Mari 5.0",
                            "url": "https://pan.baidu.com/s/1_nFn9IiDraJjUsnVAdh63w?pwd=yufp",
                            "xun": "https://pan.xunlei.com/s/VOAbxsM6o7HCghBg0Jv7uc-AA1?pwd=gv94#",
                            "uc": "https://pan.quark.cn/s/62efbedc220c",
                            "jc": "https://x.xu5.cc/post/281.html"
                        }, {
                            "name": "Mari 4.1",
                            "url": "https://pan.baidu.com/s/1ezS6WTHdHDB5XERnGaMLAw?pwd=v0mi",
                            "xun": "https://pan.xunlei.com/s/VOAbxu-6VFzs56Arorr1mfmyA1?pwd=srmh#",
                            "uc": "https://pan.quark.cn/s/6723db3fc0c2",
                            "jc": "https://x.xu5.cc/post/282.html"
                        }]
                    }, {
                        "title": "Marvelous Designer",
                        "icon": "static/img/icons/Marvelous .svg",
                        "nav": [{
                            "name": "marvelous designer 2024.2.71 ",
                            "url": "https://pan.baidu.com/s/172Z_c1LRXq9_5UCq3KOF8A?pwd=bdi8",
                            "xun": "https://pan.xunlei.com/s/VOAbxSSHGONOT7lMRvzFW_LZA1?pwd=f35r#",
                            "uc": "https://pan.quark.cn/s/56fca840767e",
                            "su": "https://su.xu5.cc/post/339.html",
                            "jc": "https://x.xu5.cc/post/435.html"
                        }, {
                            "name": "marvelous designer 2024.1.57 ",
                            "url": "https://pan.baidu.com/s/1CUslQTcqQ3cgKD2kplUnMQ?pwd=y9y4",
                            "xun": "https://pan.xunlei.com/s/VOAbxV_IpBNPY6MqzPHLCe0EA1?pwd=r2te#",
                            "uc": "https://pan.quark.cn/s/0d7ee57a4745",
                            "jc": "https://x.xu5.cc/post/285.html"
                        }, {
                            "name": "marvelous designer 2024.0.125 ",
                            "url": "https://pan.baidu.com/s/1DwRdCgT8miHLphiQUgiLhA?pwd=2pkw",
                            "xun": "https://pan.xunlei.com/s/VOAbxXcgIPn9DWokIjFlkA4wA1?pwd=ipk8#",
                            "uc": "https://pan.quark.cn/s/20ff6de0e706",
                            "jc": "https://x.xu5.cc/post/286.html"
                        }, {
                            "name": "marvelous designer 11",
                            "url": "https://pan.baidu.com/s/1QGFz4VTi6bRIsdM9JtG07w?pwd=uu31",
                            "xun": "https://pan.xunlei.com/s/VOAbxZzhPkfr8DvmexD4CsTVA1?pwd=26cc#",
                            "uc": "https://pan.quark.cn/s/accd48714551",
                            "jc": "https://x.xu5.cc/post/284.html"
                        }, {
                            "name": "marvelous designer 10",
                            "url": "https://pan.baidu.com/s/1TQnch59LCFaBLVxcorfi-Q?pwd=i2zl",
                            "xun": "https://pan.xunlei.com/s/VOAbxbACptIpRc12obM3bVdxA1?pwd=7ywf#",
                            "uc": "https://pan.quark.cn/s/3c6d5b48ea31",
                            "jc": "https://x.xu5.cc/post/289.html"
                        }, {
                            "name": "marvelous designer 9.0",
                            "url": "https://pan.baidu.com/s/1UYd13Su5uh5XDMMZbnKTlw?pwd=q6n9",
                            "xun": "https://pan.xunlei.com/s/VOAbxdCF3ck8KTQs8urcth6jA1?pwd=cyzx#",
                            "uc": "https://pan.quark.cn/s/2dce0fb73165",
                            "jc": "https://x.xu5.cc/post/169.html"
                        }]
                    }, {
                        "title": "Modo",
                        "icon": "static/img/icons/Modo.svg",
                        "nav": [{
                            "name": "Modo 17.0V1",
                            "url": "https://pan.baidu.com/s/1SOZVPpe4tTNIAJ0nUH1a_w?pwd=bwrs",
                            "xun": "https://pan.xunlei.com/s/VOAbw-bULozyClXaX8k5hQHlA1?pwd=32sc#",
                            "uc": "https://pan.quark.cn/s/a334606cd228",
                            "jc": "https://x.xu5.cc/post/290.html"
                        }, {
                            "name": "Modo 16.1V8",
                            "url": "https://pan.baidu.com/s/1rtQtx26NzTszjfbrgX7S9w?pwd=qwiv",
                            "xun": "https://pan.xunlei.com/s/VOAbw1cZptIpRc12obM3al_iA1?pwd=hq7j#",
                            "uc": "https://pan.quark.cn/s/ac7513f3b31c",
                            "jc": "https://x.xu5.cc/post/291.html"
                        }, {
                            "name": "Modo 15.0V3",
                            "url": "https://pan.baidu.com/s/1UUWpSzGN4RzLKhJtx84dcw?pwd=nvp7",
                            "xun": "https://pan.xunlei.com/s/VOAbw3IqIPn9DWokIjFljSciA1?pwd=md7p#",
                            "uc": "https://pan.quark.cn/s/8a9991385886"
                        }, {
                            "name": "Modo 13.0",
                            "url": "https://pan.baidu.com/s/16L4H5yrFOKlqpu-xjo3G2g?pwd=jrxv",
                            "xun": "https://pan.xunlei.com/s/VOAbw4zA9e43IkMi2NqIHcldA1?pwd=wysh#",
                            "uc": "https://pan.quark.cn/s/bb7b9a2d1beb",
                            "jc": "https://x.xu5.cc/post/170.html"
                        }]
                    }]
                }, {
                    "tab": "渲染引擎",
                    "icon": "",
                    "list": [{
                        "title": "VRay for 3dsmax",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "3dsmax|VRay6.2 2018-2025",
                            "url": "https://pan.baidu.com/s/17JT8mNE4-M6Kzm7aobWqJw?pwd=qxi9",
                            "xun": "https://pan.xunlei.com/s/VOAbpwn33PGiBhN4CQQ8EoJoA1?pwd=c32t#",
                            "uc": "https://pan.quark.cn/s/d6420e8b7730",
                            "jc": "https://x.xu5.cc/post/171.html"
                        }, {
                            "name": "3dsmax|VRay6.1 2018-2024",
                            "url": "https://pan.baidu.com/s/18S3iaEMhOX-A3p5EBEVkSw?pwd=vrkr",
                            "xun": "https://pan.xunlei.com/s/VOAbpzezIsoxC8LpDUR9rvNIA1?pwd=t3nj#",
                            "uc": "https://pan.quark.cn/s/c5b1f8f4088f",
                            "jc": "https://x.xu5.cc/post/172.html"
                        }, {
                            "name": "3dsmax|VRay5.1 2016-2022",
                            "url": "https://pan.baidu.com/s/1ZRk4pixPjlmJt63BstXrXw?pwd=yuby",
                            "xun": "https://pan.xunlei.com/s/VOAbq1Qg5SM6bch3h_fFtHCAA1?pwd=wgi6#",
                            "uc": "https://pan.quark.cn/s/45cd880ad43c",
                            "jc": "https://x.xu5.cc/post/173.html"
                        }, {
                            "name": "3dsmax|VRay5.0 2014-2021",
                            "url": "https://pan.baidu.com/s/15M3isj3p2CDoMc4ZZg42ag?pwd=0wzw",
                            "xun": "https://pan.xunlei.com/s/VOAbq49y-7-iZ2UpTeLJ_QTMA1?pwd=krgc#",
                            "uc": "https://pan.quark.cn/s/e8c9c7f655e4",
                            "jc": "https://x.xu5.cc/post/174.html"
                        }, {
                            "name": "3dsmax|VRay4.3 2014-2020",
                            "url": "https://pan.baidu.com/s/1Ys6HOmvglWOqBmkSRl_rHw?pwd=dgzl",
                            "xun": "https://pan.xunlei.com/s/VOAbq6IIn8TgItOLGdk21Hw4A1?pwd=rvhf#",
                            "uc": "https://pan.quark.cn/s/8027fec176e6",
                            "jc": "https://x.xu5.cc/post/175.html"
                        }, {
                            "name": "3dsmax|VRay4.2 2013-2020",
                            "url": "https://pan.baidu.com/s/18n3lt2CSavmcMBJ8KJ1WjQ?pwd=4waa",
                            "xun": "https://pan.xunlei.com/s/VOAbq8iRivz84wocylJHsL37A1?pwd=q7zt#",
                            "uc": "https://pan.quark.cn/s/8c809e970b09",
                            "jc": "https://x.xu5.cc/post/176.html"
                        }, {
                            "name": "3dsmax|VRay4.1 2013-2020",
                            "url": "https://pan.baidu.com/s/1V1f6YYbvXKN00z3r5XpvJQ?pwd=9omn",
                            "xun": "https://pan.xunlei.com/s/VOAbqAmp9e43IkMi2NqIEzgpA1?pwd=4nij#",
                            "uc": "https://pan.quark.cn/s/dccdfdf7dcfa",
                            "jc": "https://x.xu5.cc/post/177.html"
                        }, {
                            "name": "3dsmax|VRay4.0 2013-2017",
                            "url": "https://pan.baidu.com/s/1F1OdCqHVHeSn1bT86ltrnA?pwd=w4pe",
                            "xun": "https://pan.xunlei.com/s/VOAbqCt2I5tWX5IfBjXbLsf4A1?pwd=e69z#",
                            "uc": "https://pan.quark.cn/s/0c7a5b2492a3"
                        }]
                    }, {
                        "title": "VRay for Sketchup",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "Sketchup|VRay6.2 |2019-2024",
                            "url": "https://pan.baidu.com/s/1-qOzUkEiCzp5qmzE8kBdHw?pwd=xi9w",
                            "xun": "https://pan.xunlei.com/s/VOAbqYjzf6ylI6WalmkHgvQTA1?pwd=uxx8#",
                            "uc": "https://pan.quark.cn/s/10b25d05de68",
                            "jc": "https://x.xu5.cc/post/182.html"
                        }, {
                            "name": "Sketchup|VRay5.1 ",
                            "url": "https://pan.baidu.com/s/1HwcxE8wWimD_Lqc7R-QCkg?pwd=efjx",
                            "xun": "https://pan.xunlei.com/s/VOAbqbPCpBNPY6MqzPHL9T-4A1?pwd=zvrq#",
                            "uc": "https://pan.quark.cn/s/2517652c4d67",
                            "jc": "https://x.xu5.cc/post/183.html"
                        }, {
                            "name": "Sketchup|VRay4.2 ",
                            "url": "https://pan.baidu.com/s/1FrV0489hyWSK8nRarPh-wQ?pwd=64ve",
                            "xun": "https://pan.xunlei.com/s/VOAbqda2GPS1tqT-E-ILT96fA1?pwd=xj49#",
                            "uc": "https://pan.quark.cn/s/1068bfd5f81d",
                            "jc": "https://x.xu5.cc/post/184.html"
                        }, {
                            "name": "Sketchup|VRay4.1 ",
                            "url": "https://pan.baidu.com/s/1CrY1QcXVDPTaZ8G3xFnahw?pwd=xquz",
                            "xun": "https://pan.xunlei.com/s/VOAbqfhJ-7-iZ2UpTeLJ_msYA1?pwd=t6nr#",
                            "uc": "https://pan.quark.cn/s/8dc44aebc114",
                            "jc": "https://x.xu5.cc/post/185.html"
                        }]
                    }, {
                        "title": "VRay for MAYA",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "maya|VRay6.2 |2020-2024",
                            "url": "https://pan.baidu.com/s/1tR8gj1OcIe-reMx37n4YwQ?pwd=oep2",
                            "xun": "https://pan.xunlei.com/s/VOAbr4t1pBNPY6MqzPHL9diFA1?pwd=4cx2#",
                            "uc": "https://pan.quark.cn/s/dc360374cf82",
                            "jc": "https://x.xu5.cc/post/178.html"
                        }, {
                            "name": "maya|VRay6.0 |2019-2023",
                            "url": "https://pan.baidu.com/s/1IIhO0XtlucWc2tNKUGZsqw?pwd=zuwx",
                            "xun": "https://pan.xunlei.com/s/VOAbr6a8XWDu4kivZv7iVrKmA1?pwd=ktpw#",
                            "uc": "https://pan.quark.cn/s/7e2928810975",
                            "jc": "https://x.xu5.cc/post/179.html"
                        }, {
                            "name": "maya|VRay4.1 |2015-2020",
                            "url": "https://pan.baidu.com/s/1bWrfCsEXp8GG-xpNIC9TAw?pwd=8mh5",
                            "xun": "https://pan.xunlei.com/s/VOAbrCmNIsoxC8LpDUR9sUKoA1?pwd=mxtw#",
                            "uc": "https://pan.quark.cn/s/1f0405b8dd2b",
                            "jc": "https://x.xu5.cc/post/180.html"
                        }, {
                            "name": "maya|VRay4.0 |2016-2018",
                            "url": "https://pan.baidu.com/s/10G_QAVxz-47sW74QGTUUAA?pwd=9lay",
                            "xun": "https://pan.xunlei.com/s/VOAbrEd_I5tWX5IfBjXbMM-dA1?pwd=ud3h#",
                            "uc": "https://pan.quark.cn/s/3d4b92bfc749",
                            "jc": "https://x.xu5.cc/post/181.html"
                        }]
                    }, {
                        "title": "Vray for rhino",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "rhino|Vray6.2",
                            "url": "https://pan.baidu.com/s/1_hstbwjpENlVEj2yII2K-w?pwd=z9nz",
                            "xun": "https://pan.xunlei.com/s/VOAbrWyVVFzs56Arorr1j_2hA1?pwd=ntvz#",
                            "uc": "https://pan.quark.cn/s/e560ea4ca400",
                            "jc": "https://x.xu5.cc/post/192.html"
                        }]
                    }, {
                        "title": "Vray for C4D",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "C4D|Vray6.2",
                            "url": "https://pan.baidu.com/s/1WKVpeB0jNlGD_x4eIWgVCA?pwd=xtrl",
                            "xun": "https://pan.xunlei.com/s/VOAbs_krgVXbp0dfdIy5aMo_A1?pwd=wpjx#",
                            "uc": "https://pan.quark.cn/s/4db2867b4936",
                            "jc": "https://x.xu5.cc/post/186.html"
                        }, {
                            "name": "C4D|Vray 6.0",
                            "url": "https://pan.baidu.com/s/1bXF3uZTwsXDjvSSuS9CxuA?pwd=0nk3",
                            "xun": "https://pan.xunlei.com/s/VOAbsbiRSN7RdpC7tQ54f0VpA1?pwd=25g6#",
                            "uc": "https://pan.quark.cn/s/c3bbae78c22e",
                            "jc": "https://x.xu5.cc/post/187.html"
                        }, {
                            "name": "C4D|Vray 5.2",
                            "url": "https://pan.baidu.com/s/1NJeDjcuLsyAOM0yUn4q11w?pwd=f4en",
                            "xun": "https://pan.xunlei.com/s/VOAbsenKR_r-zZAMhnoGTjsPA1?pwd=i4a2#",
                            "uc": "https://pan.quark.cn/s/aa212c1ff428",
                            "jc": "https://x.xu5.cc/post/188.html"
                        }, {
                            "name": "C4D|Vray 5.0",
                            "url": "https://pan.baidu.com/s/1Wc-B4lzPNYKLkuZVhDCDvA?pwd=kv5t",
                            "xun": "https://pan.xunlei.com/s/VOAbshKQ17p82f1YWXjRDPMjA1?pwd=sbrr#",
                            "uc": "https://pan.quark.cn/s/40403a432247",
                            "jc": "https://x.xu5.cc/post/189.html"
                        }]
                    }, {
                        "title": "VRay For Revit",
                        "icon": "static/img/icons/vray.svg",
                        "nav": [{
                            "name": "Revit|VRay5.1|2018-2022",
                            "url": "https://pan.baidu.com/s/1OdnG0tfGw5IP2lbswkCWpw?pwd=zxk5",
                            "xun": "https://pan.xunlei.com/s/VOAbt-RuI5tWX5IfBjXbN9NAA1?pwd=5v7u#",
                            "uc": "https://pan.quark.cn/s/7f4caffda11f",
                            "jc": "https://x.xu5.cc/post/195.html"
                        }, {
                            "name": "Revit|VRay4.0 for Revit2015-2020",
                            "url": "https://pan.baidu.com/s/1NFr9boBUtNiA3I0tabSDAg?pwd=tngl",
                            "xun": "https://pan.xunlei.com/s/VOAbt2zR-7-iZ2UpTeLJaxgkA1?pwd=ujmh#",
                            "uc": "https://pan.quark.cn/s/ae2975b1cd77",
                            "jc": "https://x.xu5.cc/post/196.html"
                        }]
                    }, {
                        "title": "Corona renderer for C4D",
                        "icon": "static/img/icons/Corona.svg",
                        "nav": [{
                            "name": "C4D|Corona 11",
                            "url": "https://pan.baidu.com/s/1YONAvcty2kZ5HdpWEf-6jA?pwd=m296",
                            "xun": "https://pan.xunlei.com/s/VOAc-Urh3PGiBhN4CQQ8K3doA1?pwd=g8pq#",
                            "uc": "https://pan.quark.cn/s/3988dcc4b37d",
                            "jc": "https://x.xu5.cc/post/202.html"
                        }, {
                            "name": "C4D|Corona 10",
                            "url": "https://pan.baidu.com/s/1AWQ_nblqOcxPGVGJ1_m1EA?pwd=9wb4",
                            "xun": "https://pan.xunlei.com/s/VOAc-XI9m-xVP8CEro5md3-KA1?pwd=27sv#",
                            "uc": "https://pan.quark.cn/s/fe2ca46e634a",
                            "jc": "https://x.xu5.cc/post/203.html"
                        }, {
                            "name": "C4D|Corona 9",
                            "url": "https://pan.baidu.com/s/1OwpAg8ynKumuf7MFsO_ngw?pwd=v2sf",
                            "xun": "https://pan.xunlei.com/s/VOAc-ZFd5SM6bch3h_fFyehIA1?pwd=xpvz#",
                            "uc": "https://pan.quark.cn/s/419eccbcdcce",
                            "jc": "https://x.xu5.cc/post/201.html"
                        }, {
                            "name": "C4D|Corona 8",
                            "url": "https://pan.baidu.com/s/1SSWrDFvkhBF_etjyKpTHDA?pwd=941n",
                            "xun": "https://pan.xunlei.com/s/VOAc-_yTTZUEL58Uh04Dty1zA1?pwd=b4hr#",
                            "uc": "https://pan.quark.cn/s/859216d95812",
                            "jc": "https://x.xu5.cc/post/204.html"
                        }]
                    }, {
                        "title": "Corona renderer for 3dmax",
                        "icon": "static/img/icons/Corona.svg",
                        "nav": [{
                            "name": "3dmax|Corona 11   ",
                            "url": "https://pan.baidu.com/s/1GJzgjhKr58tipyNjpsRbZA?pwd=rsbc",
                            "xun": "https://pan.xunlei.com/s/VOAc06HXDr78N3exXOZX-4IdA1?pwd=7cy4#",
                            "uc": "https://pan.quark.cn/s/ebd36700e0ce",
                            "jc": "https://x.xu5.cc/post/206.html"
                        }, {
                            "name": "3dmax|Corona 10",
                            "url": "https://pan.baidu.com/s/1F4mpu_N46WWyL31yJS2EWw?pwd=v3fi",
                            "xun": "https://pan.xunlei.com/s/VOAc098rIPn9DWokIjFlm7KjA1?pwd=6kyv#",
                            "uc": "https://pan.quark.cn/s/c7b37c16cd35",
                            "jc": "https://x.xu5.cc/post/208.html"
                        }, {
                            "name": "3dmax|Corona 9",
                            "url": "https://pan.baidu.com/s/14RC_0jgJxLYp2q10ANZ4eQ?pwd=tpny",
                            "xun": "https://pan.xunlei.com/s/VOAc0CPOR_r-zZAMhnoGXs4FA1?pwd=7ypz#",
                            "uc": "https://pan.quark.cn/s/732b0bf4f67a",
                            "jc": "https://x.xu5.cc/post/207.html"
                        }, {
                            "name": "3dmax|Corona 8",
                            "url": "https://pan.baidu.com/s/1HnPN7r43netNNdmUqTqFgA?pwd=jndw",
                            "xun": "https://pan.xunlei.com/s/VOAc0FSD3yWeXr1momDVJ0huA1?pwd=kai3#",
                            "uc": "https://pan.quark.cn/s/cf87c4eca144",
                            "jc": "https://x.xu5.cc/post/209.html"
                        }]
                    }, {
                        "title": "Keyshot",
                        "icon": "static/img/icons/Keyshot.svg",
                        "nav": [{
                            "name": "Keyshot V13.0.0.92 ",
                            "url": "https://pan.baidu.com/s/1_AEnpNe9QarJkZnSptlaOg?pwd=sh1b",
                            "xun": "https://pan.xunlei.com/s/VOAbyi7Z3yWeXr1momDVHiycA1?pwd=d48d#",
                            "uc": "https://pan.quark.cn/s/32a2d54407fe",
                            "jc": "https://x.xu5.cc/post/515.html"
                        }, {
                            "name": "Keyshot v12.2.1.2 ",
                            "url": "https://pan.baidu.com/s/1dAlJ4vdvMCfjdkUx_eIZ4w?pwd=35ji",
                            "xun": "https://pan.xunlei.com/s/VOAbykhnn8TgItOLGdk25gbZA1?pwd=47xm#",
                            "uc": "https://pan.quark.cn/s/53a9b938e883",
                            "jc": "https://x.xu5.cc/post/514.html"
                        }, {
                            "name": "Keyshot   9.0",
                            "url": "https://pan.baidu.com/s/1AMt0UkDtAIlsBDA8mdmC2g?pwd=q7i6",
                            "xun": "https://pan.xunlei.com/s/VOAbyo1T-7-iZ2UpTeLJdiRIA1?pwd=dewk#",
                            "uc": "https://pan.quark.cn/s/a80f6af126f0",
                            "jc": "https://x.xu5.cc/post/211.html"
                        }, {
                            "name": "Keyshot   8.0",
                            "url": "https://pan.baidu.com/s/195Z1_zYQpn_ykzLbfhdzxQ?pwd=l337",
                            "xun": "https://pan.xunlei.com/s/VOAbyptU7TZlOOUcRUPmFlcRA1?pwd=xdxk#",
                            "uc": "https://pan.quark.cn/s/8e9f7db583d3",
                            "jc": "https://x.xu5.cc/post/212.html"
                        }, {
                            "name": "Keyshot   7.0",
                            "url": "https://pan.baidu.com/s/1UZgwbJdi0NhtvUN3VZWynw?pwd=pm2h",
                            "xun": "https://pan.xunlei.com/s/VOAbyrNBVFzs56Arorr1n98SA1?pwd=22nh#",
                            "uc": "https://pan.quark.cn/s/e75d3da38e29",
                            "jc": "https://x.xu5.cc/post/213.html"
                        }]
                    }]
                }, {
                    "tab": "CAD",
                    "icon": "",
                    "list": [{
                        "title": "AutoCAD",
                        "icon": "static/img/icons/AutoCAD.svg",
                        "nav": [{
                            "name": "常见问题",
                            "wenti": "https://x.xu5.cc/post/97.html"
                        }, {
                            "name": "Auto cad 2025",
                            "url": "https://pan.baidu.com/s/1q4F5ZWX84B93AP5NBHLKPg?pwd=vy81",
                            "xun": "https://pan.xunlei.com/s/VOAc22eWIsoxC8LpDUR9yKrLA1?pwd=fn9c#",
                            "uc": "https://pan.quark.cn/s/49b5945a49e4",
                            "su": "https://su.xu5.cc/post/285.html",
                            "jc": "https://x.xu5.cc/post/21.html"
                        }, {
                            "name": "Auto cad 2024",
                            "url": "https://pan.baidu.com/s/1yVlOmkFIF1Q17XcuYprOwg?pwd=c0c7",
                            "xun": "https://pan.xunlei.com/s/VOAc25az-7-iZ2UpTeLJfwWiA1?pwd=eb4r#",
                            "uc": "https://pan.quark.cn/s/d8e9c088c3b7",
                            "su": "https://su.xu5.cc/post/286.html",
                            "jc": "https://x.xu5.cc/post/94.html"
                        }, {
                            "name": "Auto cad 2023",
                            "url": "https://pan.baidu.com/s/1hOiIKhlTnkFnBKIjgINODg?pwd=ic55",
                            "xun": "https://pan.xunlei.com/s/VOAc28MiR_r-zZAMhnoGYwzJA1?pwd=xzwf#",
                            "uc": "https://pan.quark.cn/s/ceae0ec5fa7d",
                            "su": "https://su.xu5.cc/post/287.html",
                            "jc": "https://x.xu5.cc/post/95.html"
                        }, {
                            "name": "Auto cad 2022",
                            "url": "https://pan.baidu.com/s/13WU85_DIUGykrVqefIRjIw?pwd=s12y",
                            "xun": "https://pan.xunlei.com/s/VOAc2ANYgVXbp0dfdIy5feDVA1?pwd=ujdc#",
                            "uc": "https://pan.quark.cn/s/ef1a409a68a9",
                            "su": "https://su.xu5.cc/post/288.html",
                            "jc": "https://x.xu5.cc/post/98.html"
                        }, {
                            "name": "Auto cad 2021",
                            "url": "https://pan.baidu.com/s/11CfEADRuD8g6kRsRPcvZCA?pwd=jkni",
                            "xun": "https://pan.xunlei.com/s/VOAc2CW3TGvLpavAUvhfXRBQA1?pwd=qcgs#",
                            "uc": "https://pan.quark.cn/s/0d47fa55ad1f",
                            "su": "https://su.xu5.cc/post/289.html",
                            "jc": "https://x.xu5.cc/post/99.html"
                        }, {
                            "name": "Auto cad 2020",
                            "url": "https://pan.baidu.com/s/13NBwCClUduPol8GFdSS0qA?pwd=z8zj",
                            "xun": "https://pan.xunlei.com/s/VOAc2F1tM8b-PFjZe2md2lxfA1?pwd=vrrz#",
                            "uc": "https://pan.quark.cn/s/882363f7a7ef",
                            "su": "https://su.xu5.cc/post/290.html",
                            "jc": "https://x.xu5.cc/post/100.html"
                        }, {
                            "name": "Auto cad 2019",
                            "url": "https://pan.baidu.com/s/1QnYkySPX-Q-jZYb3q0Q08w?pwd=fhdk",
                            "xun": "https://pan.xunlei.com/s/VOAc2HQgo7HCghBg0Jv7xZdAA1?pwd=7dfe#",
                            "uc": "https://pan.quark.cn/s/36e7f240e90d",
                            "su": "https://su.xu5.cc/post/291.html",
                            "jc": "https://x.xu5.cc/post/101.html"
                        }, {
                            "name": "Auto cad 2018",
                            "url": "https://pan.baidu.com/s/1lXQDzdh1Zm-eaJ3JUzNDMg?pwd=h346",
                            "xun": "https://pan.xunlei.com/s/VOAc2Jhnm-xVP8CEro5meY-FA1?pwd=37qk#",
                            "uc": "https://pan.quark.cn/s/0feae9dd2657",
                            "su": "https://su.xu5.cc/post/292.html",
                            "jc": "https://x.xu5.cc/post/102.html"
                        }, {
                            "name": "Auto cad 2017",
                            "url": "https://pan.baidu.com/s/1DRJMxIy-cDGniRgoxOZqag?pwd=11eg",
                            "xun": "https://pan.xunlei.com/s/VOAc2MFYVFzs56Arorr1pWt9A1?pwd=gyxs#",
                            "uc": "https://pan.quark.cn/s/15a0b8449c77",
                            "su": "https://su.xu5.cc/post/293.html",
                            "jc": "https://x.xu5.cc/post/103.html"
                        }, {
                            "name": "Auto cad 2016",
                            "url": "https://pan.baidu.com/s/1KSfymQBw4s_aUsU9R0nG4Q?pwd=tojh",
                            "xun": "https://pan.xunlei.com/s/VOAc2PKFyDqGmWgHVXSXuAZ9A1?pwd=rykw#",
                            "uc": "https://pan.quark.cn/s/d821257fdc06",
                            "su": "https://su.xu5.cc/post/294.html",
                            "jc": "https://x.xu5.cc/post/115.html"
                        }, {
                            "name": "Auto cad 2015",
                            "url": "https://pan.baidu.com/s/1Zf3yfjjZluNFoPz6Bv9aRA?pwd=svgl",
                            "xun": "https://pan.xunlei.com/s/VOAc2SDmf6ylI6WalmkHnEuRA1?pwd=ytcn#",
                            "uc": "https://pan.quark.cn/s/b31d92702139",
                            "su": "https://su.xu5.cc/post/295.html",
                            "jc": "https://x.xu5.cc/post/104.html"
                        }, {
                            "name": "Auto cad 2014",
                            "url": "https://pan.baidu.com/s/1lwcUUbLYtt-hhbulSX1-Tw?pwd=hnuv",
                            "xun": "https://pan.xunlei.com/s/VOAc2UbtVFzs56Arorr1pbqgA1?pwd=3yer#",
                            "uc": "https://pan.quark.cn/s/93b9dc26f24c",
                            "su": "https://su.xu5.cc/post/296.html",
                            "jc": "https://x.xu5.cc/post/105.html"
                        }, {
                            "name": "Auto cad 2013",
                            "url": "https://pan.baidu.com/s/1FcRvh-rXbrqivpBNZZSGuw?pwd=p3t3",
                            "xun": "https://pan.xunlei.com/s/VOAc2XGwtkjA9A1wN0h1_I07A1?pwd=y9jy#",
                            "uc": "https://pan.quark.cn/s/0742fda407d1",
                            "su": "https://su.xu5.cc/post/297.html",
                            "jc": "https://x.xu5.cc/post/106.html"
                        }, {
                            "name": "Auto cad 2012",
                            "url": "https://pan.baidu.com/s/1gg15kXjJIc9bz-Ai-g1NiA?pwd=vk8h",
                            "xun": "https://pan.xunlei.com/s/VOAc2ZiD17p82f1YWXjRIoY6A1?pwd=epqq#",
                            "uc": "https://pan.quark.cn/s/dfbe80cbbba0",
                            "su": "https://su.xu5.cc/post/298.html",
                            "jc": "https://x.xu5.cc/post/107.html"
                        }, {
                            "name": "Auto cad 2011",
                            "url": "https://pan.baidu.com/s/1julIJsL6Y6kpU15pjkNb1Q?pwd=43zw",
                            "xun": "https://pan.xunlei.com/s/VOAc2b8-Dr78N3exXOZX0RN1A1?pwd=a9yj#",
                            "uc": "https://pan.quark.cn/s/b23f0a2150e2",
                            "su": "https://su.xu5.cc/post/299.html",
                            "jc": "https://x.xu5.cc/post/108.html"
                        }, {
                            "name": "Auto cad 2010",
                            "url": "https://pan.baidu.com/s/1fLyJVy9fiAR1ewaRBsfs5A?pwd=zsuf",
                            "xun": "https://pan.xunlei.com/s/VOAc2edU_bT-Arqvd0uK8CNlA1?pwd=k6e2#",
                            "uc": "https://pan.quark.cn/s/d930617bb438",
                            "su": "https://su.xu5.cc/post/300.html",
                            "jc": "https://x.xu5.cc/post/109.html"
                        }, {
                            "name": "Auto cad 2009",
                            "url": "https://pan.baidu.com/s/1Ll97g5-5fpubha-XKWQh4Q?pwd=cwa5",
                            "xun": "https://pan.xunlei.com/s/VOAc2heR17p82f1YWXjRIsMUA1?pwd=349d#",
                            "uc": "https://pan.quark.cn/s/47a941ea8e02",
                            "su": "https://su.xu5.cc/post/301.html",
                            "jc": "https://x.xu5.cc/post/114.html"
                        }, {
                            "name": "Auto cad 2008",
                            "url": "https://pan.baidu.com/s/1R7ehtoseo9vH1XY4NMKT8g?pwd=v07b",
                            "xun": "https://pan.xunlei.com/s/VOAc2kLT3yWeXr1momDVKGHTA1?pwd=79qy#",
                            "uc": "https://pan.quark.cn/s/470af27145c0",
                            "su": "https://su.xu5.cc/post/302.html",
                            "jc": "https://x.xu5.cc/post/110.html"
                        }, {
                            "name": "Auto cad 2007",
                            "url": "https://pan.baidu.com/s/11ZcEP0z3NS7Hxmq4k4Y_DQ?pwd=x5n4",
                            "xun": "https://pan.xunlei.com/s/VOAc2m_kgVXbp0dfdIy5g-bGA1?pwd=4r2q#",
                            "uc": "https://pan.quark.cn/s/1a4f18160ff5",
                            "su": "https://su.xu5.cc/post/303.html",
                            "jc": "https://x.xu5.cc/post/111.html"
                        }, {
                            "name": "Auto cad 2006",
                            "url": "https://pan.baidu.com/s/1nuQXLxCkD8K7J-Y4UlWegw?pwd=nn4u",
                            "xun": "https://pan.xunlei.com/s/VOAc2oe9n8TgItOLGdk28AuGA1?pwd=kyqv#",
                            "uc": "https://pan.quark.cn/s/d0bb1fd4f257",
                            "su": "https://su.xu5.cc/post/304.html",
                            "jc": "https://x.xu5.cc/post/112.html"
                        }, {
                            "name": "Auto cad 2005",
                            "url": "https://pan.baidu.com/s/1cLU9oQWYaFaXtB9tIBky4w?pwd=w82j",
                            "xun": "https://pan.xunlei.com/s/VOAc2rDBpBNPY6MqzPHLFndjA1?pwd=dhjp#",
                            "uc": "https://pan.quark.cn/s/59d3ba80373f",
                            "su": "https://su.xu5.cc/post/305.html",
                            "jc": "https://x.xu5.cc/post/21.html"
                        }, {
                            "name": "Auto cad 2004",
                            "url": "https://pan.baidu.com/s/1puYMBpXRPvb2-wsqFNzDWQ?pwd=worm",
                            "xun": "https://pan.xunlei.com/s/VOAc2tmryDqGmWgHVXSXuSO_A1?pwd=phek#",
                            "uc": "https://pan.quark.cn/s/6811206414e1",
                            "su": "https://su.xu5.cc/post/306.html",
                            "jc": "https://x.xu5.cc/post/113.html"
                        }, {
                            "name": "破解补丁2002-2000",
                            "url": "https://pan.baidu.com/s/1u1NX-gh42bPxtpY0D-GMzQ?pwd=v8dm",
                            "xun": "https://pan.xunlei.com/s/VOAc2xS2QzDSnT2515feOg2YA1?pwd=xqx8#",
                            "uc": "https://pan.quark.cn/s/a241e8d4c6da"
                        }, {
                            "name": "Auto cad 插件",
                            "url": "https://pan.baidu.com/s/1DTD8IxmWf8eNy11cHnt9Pg?pwd=bbdm",
                            "xun": "https://pan.xunlei.com/s/VOAc310C9e43IkMi2NqILXRCA1?pwd=kuhs#",
                            "uc": "https://pan.quark.cn/s/4a9ac9ecf7b8"
                        }]
                    }, {
                        "title": "AutoCAD|mac版",
                        "icon": "static/img/icons/AutoCAD.svg",
                        "nav": [{
                            "name": "Auto cad 2025",
                            "url": "https://pan.baidu.com/s/1gptTvE5IQFinAqzkTb3EnA?pwd=wyic",
                            "xun": "https://pan.xunlei.com/s/VOAeo3tETZUEL58Uh04ExD9WA1?pwd=2h4m#",
                            "uc": "https://pan.quark.cn/s/c95018e3b5ca",
                            "su": "https://su.xu5.cc/post/307.html",
                            "jc": "https://x.xu5.cc/post/22.html"
                        }, {
                            "name": "Auto cad 2024",
                            "url": "https://pan.baidu.com/s/1B61ACwgCVL-g_kjtdGnXTQ?pwd=77as",
                            "xun": "https://pan.xunlei.com/s/VOAeo5mEjqhcVWcsT0Hzt6RtA1?pwd=u2ep#",
                            "uc": "https://pan.quark.cn/s/fb25032e2ee9",
                            "su": "https://su.xu5.cc/post/308.html"
                        }]
                    }, {
                        "title": "AutoCAD Mechanical机械版",
                        "icon": "static/img/icons/AutoCAD.svg",
                        "nav": [{
                            "name": "CAD机械 2025",
                            "url": "https://pan.baidu.com/s/1r9GUAXTV4cbbK1n0PH6Swg?pwd=iwww",
                            "xun": "https://pan.xunlei.com/s/VOAk7aWQ7TZlOOUcRUPpTe2yA1?pwd=iqdq#",
                            "uc": "https://pan.quark.cn/s/50994895bae1",
                            "su": "https://su.xu5.cc/post/164.html",
                            "jc": "https://x.xu5.cc/post/220.html"
                        }, {
                            "name": "CAD机械 2024",
                            "url": "https://pan.baidu.com/s/1W82PoLXocQfNqnTueY-81Q?pwd=thu9",
                            "xun": "https://pan.xunlei.com/s/VOAk7cEotkjA9A1wN0h4cz3AA1?pwd=5cvz#",
                            "uc": "https://pan.quark.cn/s/0aeebc4e6a9e",
                            "su": "https://su.xu5.cc/post/165.html",
                            "jc": "https://x.xu5.cc/post/221.html"
                        }, {
                            "name": "CAD机械 2023",
                            "url": "https://pan.baidu.com/s/1SkbawqYyNf54SDWP9kZZDA?pwd=0a5p",
                            "xun": "https://pan.xunlei.com/s/VOAk7dvFa83B8UJ0t30x9iv-A1?pwd=d9q7#",
                            "uc": "https://pan.quark.cn/s/ee57525c711b",
                            "su": "https://su.xu5.cc/post/166.html",
                            "jc": "https://x.xu5.cc/post/222.html"
                        }, {
                            "name": "CAD机械 2020",
                            "url": "https://pan.baidu.com/s/1q0636NnJAIUA6E5Smz2Yvw?pwd=6w0i",
                            "xun": "https://pan.xunlei.com/s/VOAk7g3iDr78N3exXOZ_6CPRA1?pwd=un8s#",
                            "uc": "https://pan.quark.cn/s/4ece72ec1348",
                            "su": "https://su.xu5.cc/post/167.html",
                            "jc": "https://x.xu5.cc/post/223.html"
                        }]
                    }, {
                        "title": "AutoCAD Architecture建筑版",
                        "icon": "static/img/icons/AutoCAD.svg",
                        "nav": [{
                            "name": "CAD建筑 2024",
                            "url": "https://pan.baidu.com/s/1JFmwCa79HYj-R11mLkaFRA?pwd=jdnu",
                            "xun": "https://pan.xunlei.com/s/VOAk7rcnM8b-PFjZe2mg6ugeA1?pwd=xyvy#",
                            "uc": "https://pan.quark.cn/s/cd5d1af5ea36",
                            "su": "https://su.xu5.cc/post/263.html",
                            "jc": "https://x.xu5.cc/post/225.html"
                        }, {
                            "name": "CAD建筑 2023",
                            "url": "https://pan.baidu.com/s/1t2G29Xsi6xxdmt8sYsbYRw?pwd=xi86",
                            "xun": "https://pan.xunlei.com/s/VOAk7vAI5SM6bch3h_fJ4vTwA1?pwd=mdcy#",
                            "uc": "https://pan.quark.cn/s/5a6d8bccc37d",
                            "su": "https://su.xu5.cc/post/264.html",
                            "jc": "https://x.xu5.cc/post/226.html"
                        }, {
                            "name": "CAD建筑 2022",
                            "url": "https://pan.baidu.com/s/1fdVWc8dZkQk4hd-I1kkneQ?pwd=3ra1",
                            "xun": "https://pan.xunlei.com/s/VOAk7wtR-7-iZ2UpTeLMnZCBA1?pwd=ydhy#",
                            "uc": "https://pan.quark.cn/s/684a5b2b4b7f",
                            "su": "https://su.xu5.cc/post/265.html",
                            "jc": "https://x.xu5.cc/post/227.html"
                        }]
                    }, {
                        "title": "AutoCAD Electrical电气版",
                        "icon": "static/img/icons/AutoCAD.svg",
                        "nav": [{
                            "name": "CAD电气 2025",
                            "url": "https://pan.baidu.com/s/1hwf5kcOoRCDYvX_Vt1IByw?pwd=4923",
                            "xun": "https://pan.xunlei.com/s/VOAk85HRR_r-zZAMhnoJfF5eA1?pwd=hw97#",
                            "uc": "https://pan.quark.cn/s/98ada479b602",
                            "su": "https://su.xu5.cc/post/256.html",
                            "jc": "https://x.xu5.cc/post/228.html"
                        }, {
                            "name": "CAD电气 2024",
                            "url": "https://pan.baidu.com/s/1lG8QxyGtHCF8q1pbLn_0wA?pwd=ffq8",
                            "xun": "https://pan.xunlei.com/s/VOAk87FCSN7RdpC7tQ57pKAQA1?pwd=3urp#",
                            "uc": "https://pan.quark.cn/s/75f60f1bbadf",
                            "su": "https://su.xu5.cc/post/257.html",
                            "jc": "https://x.xu5.cc/post/229.html"
                        }, {
                            "name": "CAD电气 2023",
                            "url": "https://pan.baidu.com/s/1P6UD65v0oJhT2QVZALeYzQ?pwd=qn54",
                            "xun": "https://pan.xunlei.com/s/VOAk89Y3R_r-zZAMhnoJfGK9A1?pwd=2r2x#",
                            "uc": "https://pan.quark.cn/s/a7247b06f1be",
                            "su": "https://su.xu5.cc/post/258.html",
                            "jc": "https://x.xu5.cc/post/230.html"
                        }, {
                            "name": "CAD电气 2022",
                            "url": "https://pan.baidu.com/s/1pU0ahtztSLFH84zWqvLUdw?pwd=x9kb",
                            "xun": "https://pan.xunlei.com/s/VOAk8BCY3yWeXr1momDYPx8gA1?pwd=d4yc#",
                            "uc": "https://pan.quark.cn/s/1a7dea4a4de3",
                            "su": "https://su.xu5.cc/post/259.html",
                            "jc": "https://x.xu5.cc/post/231.html"
                        }]
                    }, {
                        "title": "CorelCAD",
                        "icon": "static/img/icons/CorelCAD.svg",
                        "nav": [{
                            "name": "CorelCAD 2023",
                            "url": "https://pan.baidu.com/s/1PCPfq4wAP2dq3rELNb1cmw?pwd=zymz",
                            "xun": "https://pan.xunlei.com/s/VOAbzgi9yDqGmWgHVXSXsCDxA1?pwd=487s#",
                            "uc": "https://pan.quark.cn/s/e42c3fd10ed0",
                            "su": "https://su.xu5.cc/post/224.html",
                            "jc": "https://x.xu5.cc/post/251.html"
                        }, {
                            "name": "CorelCAD 2021",
                            "url": "https://pan.baidu.com/s/1PfmH-WKE82WeuFAE2yA3Hg?pwd=qqke",
                            "xun": "https://pan.xunlei.com/s/VOAbziQd3ck8KTQs8urcufOCA1?pwd=h68g#",
                            "uc": "https://pan.quark.cn/s/570327b4c933",
                            "su": "https://su.xu5.cc/post/225.html",
                            "jc": "https://x.xu5.cc/post/252.html"
                        }, {
                            "name": "CorelCAD 2020",
                            "url": "https://pan.baidu.com/s/1L_T9czIXwduoHL89YpHwvA?pwd=xcx9",
                            "xun": "https://pan.xunlei.com/s/VOAbzkU9M8b-PFjZe2md0yzzA1?pwd=44yk#",
                            "uc": "https://pan.quark.cn/s/b348c960a8af",
                            "su": "https://su.xu5.cc/post/226.html",
                            "jc": "https://x.xu5.cc/post/253.html"
                        }]
                    }, {
                        "title": "天正CAD",
                        "icon": "static/img/icons/tzcad.svg",
                        "nav": [{
                            "name": "T20天正建筑 V10",
                            "url": "https://pan.baidu.com/s/1Xhdq89xwxlM6lvEdob41Bg?pwd=pe5m",
                            "xun": "https://pan.xunlei.com/s/VOAbtML-GPS1tqT-E-ILUHOjA1?pwd=jaua#",
                            "uc": "https://pan.quark.cn/s/a551a6b5054b",
                            "jc": "https://x.xu5.cc/post/277.html"
                        }, {
                            "name": "T20天正给排水 V10",
                            "url": "https://pan.baidu.com/s/1Teij_l5Pd_EecRICJuVq6g?pwd=a6gs",
                            "xun": "https://pan.xunlei.com/s/VOAbtPYAc5vCQsfuW8UvdNWJA1?pwd=n59w#",
                            "uc": "https://pan.quark.cn/s/03e6d629bd53",
                            "jc": "https://x.xu5.cc/post/277.html"
                        }, {
                            "name": "T20天正电气 V10",
                            "url": "https://pan.baidu.com/s/13yk7mvf_jRWbg800rp3p9g?pwd=jcs8",
                            "xun": "https://pan.xunlei.com/s/VOAbtTNDpBNPY6MqzPHLAgAjA1?pwd=pnqr#",
                            "uc": "https://pan.quark.cn/s/ea06a311b22f",
                            "jc": "https://x.xu5.cc/post/277.html"
                        }, {
                            "name": "T20天正暖通 V10",
                            "url": "https://pan.baidu.com/s/14IaBHUWKaD-vfqD4H0qjLQ?pwd=v6vl",
                            "xun": "https://pan.xunlei.com/s/VOAbtVxU3PGiBhN4CQQ8GVaSA1?pwd=gjb5#",
                            "uc": "https://pan.quark.cn/s/c11d53171e05",
                            "jc": "https://x.xu5.cc/post/277.html"
                        }, {
                            "name": "T20天正建筑软 V9.0",
                            "url": "https://pan.baidu.com/s/1RW6QF88t0BkGBSs56eYfEQ?pwd=vmd8",
                            "xun": "https://pan.xunlei.com/s/VOF0pzVd68g4RuN5ipC5kA9WA1?pwd=unin#",
                            "uc": "https://pan.quark.cn/s/06d9072fe181",
                            "jc": "https://x.xu5.cc/post/278.html"
                        }, {
                            "name": "T20天正结构 V9.0",
                            "url": "https://pan.baidu.com/s/1TaKjXhJ1yhVWDLwPMfW7oQ?pwd=7gox",
                            "xun": "https://pan.xunlei.com/s/VOAbtbn77TZlOOUcRUPmD8PCA1?pwd=p79c#",
                            "uc": "https://pan.quark.cn/s/54739eca1175",
                            "jc": "https://x.xu5.cc/post/278.html"
                        }, {
                            "name": "T20天正给排水 V9.0",
                            "url": "https://pan.baidu.com/s/1yo0aBGIwulejeR1vR_Wr2w?pwd=l00q",
                            "xun": "https://pan.xunlei.com/s/VOAbtev9a83B8UJ0t30u-LpdA1?pwd=u8vu#",
                            "uc": "https://pan.quark.cn/s/5cb5236d4c59",
                            "jc": "https://x.xu5.cc/post/278.html"
                        }, {
                            "name": "T20天正电气 V9.0",
                            "url": "https://pan.baidu.com/s/1DoAcy50URbQw_RwIL1YGjw?pwd=ld3z",
                            "xun": "https://pan.xunlei.com/s/VOAbthI3COoU9K0ODnf2ZWBMA1?pwd=5gd5#",
                            "uc": "https://pan.quark.cn/s/2ff0fcd58ba3",
                            "jc": "https://x.xu5.cc/post/278.html"
                        }, {
                            "name": "T20天正暖通 V9.0",
                            "url": "https://pan.baidu.com/s/1-YsYK6B3pu2cRTjE-kH-Pw?pwd=qrao",
                            "xun": "https://pan.xunlei.com/s/VOAbtj6agVXbp0dfdIy5b-2nA1?pwd=qybi#",
                            "uc": "https://pan.quark.cn/s/c7d5126c4b2d",
                            "jc": "https://x.xu5.cc/post/278.html"
                        }]
                    }, {
                        "title": "浩辰CAD",
                        "icon": "static/img/icons/hccad.svg",
                        "nav": [{
                            "name": "浩辰CAD 2024",
                            "url": "https://pan.baidu.com/s/1nb56NzVvyAia7YCJNwLeCA?pwd=ahdr",
                            "xun": "https://pan.xunlei.com/s/VOAg6gCCGPS1tqT-E-IN6J_4A1?pwd=3wfz#",
                            "uc": "https://pan.quark.cn/s/6043b7e54c2c",
                            "jc": "https://x.xu5.cc/post/493.html"
                        }, {
                            "name": "浩辰CAD 2023",
                            "url": "https://pan.baidu.com/s/1ClGZwMfhj2vec40HuhWArw?pwd=710z",
                            "xun": "https://pan.xunlei.com/s/VOAg6iB-GONOT7lMRvzH6jfOA1?pwd=9z45#",
                            "uc": "https://pan.quark.cn/s/e476a221906c",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2022",
                            "url": "https://pan.baidu.com/s/1GQe4T3FLB5IXlOnyWnafZw?pwd=1frn",
                            "xun": "https://pan.xunlei.com/s/VOAg6kTW3PGiBhN4CQQ9smHSA1?pwd=we2t#",
                            "uc": "https://pan.quark.cn/s/5c466de0df49",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2021",
                            "url": "https://pan.baidu.com/s/1d0hGxd4veRyVz7PnzxswuA?pwd=yk4k",
                            "xun": "https://pan.xunlei.com/s/VOAg6mpQc5vChKVXk73in18fA1?pwd=ayt2#",
                            "uc": "https://pan.quark.cn/s/092418684b4d",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2020",
                            "url": "https://pan.baidu.com/s/1JbIuHW8aCkKnbKJTOcDPPQ?pwd=in5u",
                            "xun": "https://pan.xunlei.com/s/VOAg6oksDr78N3exXOZYZBOMA1?pwd=4thv#",
                            "uc": "https://pan.quark.cn/s/d909ede2d0eb",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2019",
                            "url": "https://pan.baidu.com/s/1KC91V4r_E8MzL3Z2z7Tnng?pwd=u9xd",
                            "xun": "https://pan.xunlei.com/s/VOAg6ql73PGiBhN4CQQ9sowmA1?pwd=b6u2#",
                            "uc": "https://pan.quark.cn/s/0e977d2545eb",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2018",
                            "url": "https://pan.baidu.com/s/125PsZ0D7RPAZKRbxdL0P5A?pwd=cpea",
                            "xun": "https://pan.xunlei.com/s/VOAg6tSSPkfr8DvmexD5r29iA1?pwd=qk33#",
                            "uc": "https://pan.quark.cn/s/7858a68afee3",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2017",
                            "url": "https://pan.baidu.com/s/1UIgDzGZZ9c56XOZXpYTtmA?pwd=1oka",
                            "xun": "https://pan.xunlei.com/s/VOAg6vivDr78N3exXOZYZE3EA1?pwd=awym#",
                            "uc": "https://pan.quark.cn/s/72c3a7b70f9c",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2016",
                            "url": "https://pan.baidu.com/s/1PYVnWMjc3tLAeDSyygvFfA?pwd=qm70",
                            "xun": "https://pan.xunlei.com/s/VOAg6yKL9e43IkMi2NqJsmR0A1?pwd=c8ec#",
                            "uc": "https://pan.quark.cn/s/cc658d2548a3",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2015",
                            "url": "https://pan.baidu.com/s/1bMge4WyR4eUj-X-v3hbVPg?pwd=lguv",
                            "xun": "https://pan.xunlei.com/s/VOAg70C7QzDSnT2515ffxggVA1?pwd=3s76#",
                            "uc": "https://pan.quark.cn/s/7528cd454750",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2014",
                            "url": "https://pan.baidu.com/s/1lGZqojAu9RIbzVn8XnV5Hg?pwd=9fp1",
                            "xun": "https://pan.xunlei.com/s/VOAg72hG3PGiBhN4CQQ9stEUA1?pwd=ci4a#",
                            "uc": "https://pan.quark.cn/s/83248cb52357",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2013",
                            "url": "https://pan.baidu.com/s/1YjnNx7P0VcgmGYOfRQ1mxg?pwd=ghyb",
                            "xun": "https://pan.xunlei.com/s/VOAg74p9m-xVP8CEro5oDEa9A1?pwd=2div#",
                            "uc": "https://pan.quark.cn/s/60f659f566f4",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2012",
                            "url": "https://pan.baidu.com/s/13jaeEyCyce2kKDyX-utp5w?pwd=uej1",
                            "xun": "https://pan.xunlei.com/s/VOAg77jmjqhcVWcsT0I-PBvgA1?pwd=2b5q#",
                            "uc": "https://pan.quark.cn/s/ae6c83459eea",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2011",
                            "url": "https://pan.baidu.com/s/1IhIt9aL0VMhT_UswDupuSQ?pwd=9mzx",
                            "xun": "https://pan.xunlei.com/s/VOAg7Az1n8TgItOLGdk3hDX7A1?pwd=kqj5#",
                            "uc": "https://pan.quark.cn/s/7682a098653f",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }, {
                            "name": "浩辰CAD 2010",
                            "url": "https://pan.baidu.com/s/1goru7XSC0mw2h6VQVgY7QA?pwd=e6mf",
                            "xun": "https://pan.xunlei.com/s/VOAg7D-TVvZnyQgLfpmEOxO_A1?pwd=cdyb#",
                            "uc": "https://pan.quark.cn/s/cc5273fdf784",
                            "jc": "https://x.xu5.cc/post/279.html"
                        }]
                    }, {
                        "title": "中望CAD",
                        "icon": "static/img/icons/ZWCAD.svg",
                        "nav": [{
                            "name": "ZWCAD 2025",
                            "url": "https://pan.baidu.com/s/1VlJYFzD92ZD-mvokJNSt3A?pwd=2e04",
                            "xun": "https://pan.xunlei.com/s/VOAg4vLb5SM6bch3h_fHWtCnA1?pwd=5a4y#",
                            "uc": "https://pan.quark.cn/s/a01303414a21",
                            "jc": "https://x.xu5.cc/post/232.html"
                        }, {
                            "name": "ZWCAD 2024",
                            "url": "https://pan.baidu.com/s/10mRV8dWu-BrrBvUgRv_zSg?pwd=xkv5",
                            "xun": "https://pan.xunlei.com/s/VOAg4zIytkjA9A1wN0h35fz4A1?pwd=6zad#",
                            "uc": "https://pan.quark.cn/s/e0cbcaaab8fb",
                            "jc": "https://x.xu5.cc/post/274.html"
                        }, {
                            "name": "ZWCAD 2023",
                            "url": "https://pan.baidu.com/s/1P3AVGCoQbtDFVhdQonR24g?pwd=54jz",
                            "xun": "https://pan.xunlei.com/s/VOAg51P6VvZnyQgLfpmEO1yWA1?pwd=5vvv#",
                            "uc": "https://pan.quark.cn/s/f98178a26b90",
                            "jc": "https://x.xu5.cc/post/275.html"
                        }, {
                            "name": "ZWCAD 2024建筑版",
                            "url": "https://pan.baidu.com/s/1mo6reIMa2-yEAVp6MUU_nA?pwd=c6ya",
                            "xun": "https://pan.xunlei.com/s/VOAg59cQ-7-iZ2UpTeLLF7hBA1?pwd=jq2e#",
                            "uc": "https://pan.quark.cn/s/bbdecc73d2d2",
                            "jc": "https://x.xu5.cc/post/274.html"
                        }, {
                            "name": "ZWCAD 2023建筑版",
                            "url": "https://pan.baidu.com/s/1IWUd9AE9oHpV9UVpxvCP8A?pwd=zbh5",
                            "xun": "https://pan.xunlei.com/s/VOAg5CFso7HCghBg0Jv9UvyiA1?pwd=ecae#",
                            "uc": "https://pan.quark.cn/s/961752894a58",
                            "jc": "https://x.xu5.cc/post/275.html"
                        }, {
                            "name": "ZWCAD 2024机械版",
                            "url": "https://pan.baidu.com/s/1WyoC1d9IjlC3LlaXPkryxg?pwd=sye8",
                            "xun": "https://pan.xunlei.com/s/VOAg5FPATZUEL58Uh04FT8ixA1?pwd=zcqr#",
                            "uc": "https://pan.quark.cn/s/8c7a5f331dae",
                            "jc": "https://x.xu5.cc/post/274.html"
                        }, {
                            "name": "ZWCAD 2023机械版",
                            "url": "https://pan.baidu.com/s/1OLhlpXheo5BkHEg_Bj_pNQ?pwd=k76l",
                            "xun": "https://pan.xunlei.com/s/VOAg5Iocivz84wocylJJViqlA1?pwd=8dsw#",
                            "uc": "https://pan.quark.cn/s/52048c46292c",
                            "jc": "https://x.xu5.cc/post/275.html"
                        }, {
                            "name": "ZWCAD 2021",
                            "url": "https://pan.baidu.com/s/1GW7rIc8MlCQWXAQXXoryCA?pwd=ap9o",
                            "xun": "https://pan.xunlei.com/s/VOAg5M-ef6ylI6WalmkJJmHwA1?pwd=ajzy#",
                            "uc": "https://pan.quark.cn/s/919c4681569e",
                            "jc": "https://x.xu5.cc/post/276.html"
                        }]
                    }]
                }, {
                    "tab": "视频后期",
                    "icon": "",
                    "list": [{
                        "title": "DaVinci Resolve达芬奇",
                        "icon": "/static/img/icons/DaVinciResolve.svg",
                        "nav": [{
                            "name": "达芬奇 v19.1.3.7",
                            "xun": "https://pan.xunlei.com/s/VOJOE72A3EfA9tIFhAh42ffxA1?pwd=w8dk#",
                            "uc": "https://pan.quark.cn/s/21c0b1312a2e",
                            "jc": "https://x.xu5.cc/post/512.html"
                        }, {
                            "name": "达芬奇 v19.1.2",
                            "xun": "https://pan.xunlei.com/s/VOEwhxzbpJIyJUCG8bQJuzORA1?pwd=iru5#",
                            "uc": "https://pan.quark.cn/s/76116287f5c4",
                            "jc": "https://x.xu5.cc/post/512.html"
                        }, {
                            "name": "达芬奇 v19.1.1",
                            "xun": "https://pan.xunlei.com/s/VOESdIJq4Fy4z2CKqFk3exhRA1?pwd=x295#",
                            "uc": "https://pan.quark.cn/s/614cb0bd42fe",
                            "jc": "https://x.xu5.cc/post/512.html"
                        }, {
                            "name": "达芬奇 v19.1.0.12",
                            "xun": "https://pan.xunlei.com/s/VOEMdTJKlHHjWYBxZlfJnmHWA1?pwd=htv2#",
                            "uc": "https://pan.quark.cn/s/83a1894fae8e",
                            "jc": "https://x.xu5.cc/post/510.html"
                        }, {
                            "name": "达芬奇 18",
                            "url": "https://pan.baidu.com/s/1CM8S4PPHQ5Hl_8qm-RgpqQ?pwd=zmqd",
                            "xun": "https://pan.xunlei.com/s/VOAbC4cH9e43IkMi2NqI-ERTA1?pwd=8at4#",
                            "uc": "https://pan.quark.cn/s/5b83fd94597a",
                            "su": "https://su.xu5.cc/post/203.html",
                            "jc": "https://x.xu5.cc/post/35.html"
                        }, {
                            "name": "达芬奇 17",
                            "url": "https://pan.baidu.com/s/14CjQIYclJXwXhS9ayzdZpA?pwd=lh4y",
                            "xun": "https://pan.xunlei.com/s/VOAbC6cwVvZnyQgLfpmCWQUpA1?pwd=2775#",
                            "uc": "https://pan.quark.cn/s/697cbddb7cc8",
                            "su": "https://su.xu5.cc/post/204.html"
                        }, {
                            "name": "达芬奇 16",
                            "url": "https://pan.baidu.com/s/154pyLjU_VmJ2ok5hJ-QLSQ?pwd=fir5",
                            "xun": "https://pan.xunlei.com/s/VOAbC8Xa3PGiBhN4CQQ8-C28A1?pwd=66aw#",
                            "uc": "https://pan.quark.cn/s/d412cf3de702",
                            "su": "https://su.xu5.cc/post/205.html",
                            "jc": "https://x.xu5.cc/post/321.html"
                        }, {
                            "name": "达芬奇 15",
                            "url": "https://pan.baidu.com/s/1xecY5KlhJtWEjxFnKPl7Sg?pwd=o3ez",
                            "xun": "https://pan.xunlei.com/s/VOAbCAKgGPS1tqT-E-ILDMvaA1?pwd=33we#",
                            "uc": "https://pan.quark.cn/s/bc365041159a",
                            "su": "https://su.xu5.cc/post/206.html",
                            "jc": "https://x.xu5.cc/post/319.html"
                        }]
                    }, {
                        "title": "DaVinci Resolve达芬奇 MAC版",
                        "icon": "/static/img/icons/DaVinciResolve.svg",
                        "nav": [{
                            "name": "达芬奇 19.1|mac",
                            "xun": "https://pan.xunlei.com/s/VODgD4YRLFNz-ayI4zcIHPnZA1?pwd=invi#",
                            "jc": "https://x.xu5.cc/post/511.html"
                        }, {
                            "name": "达芬奇 18|mac",
                            "url": "https://pan.baidu.com/s/1ggemh_bXAR-zvDihiln8MQ?pwd=2ri2",
                            "xun": "https://pan.xunlei.com/s/VOAbCRWOn8TgItOLGdk1mvwPA1?pwd=rhqx#",
                            "uc": "https://pan.quark.cn/s/e81ccbe9409c",
                            "su": "https://su.xu5.cc/post/207.html",
                            "jc": "https://x.xu5.cc/post/34.html"
                        }, {
                            "name": "达芬奇 17|mac",
                            "url": "https://pan.baidu.com/s/14CjQIYclJXwXhS9ayzdZpA?pwd=lh4y",
                            "xun": "https://pan.xunlei.com/s/VOAbCTNW5SM6bch3h_fFe9TrA1?pwd=5kek#",
                            "uc": "https://pan.quark.cn/s/7a18229b548e",
                            "su": "https://su.xu5.cc/post/208.html"
                        }, {
                            "name": "达芬奇 16|mac",
                            "url": "https://pan.baidu.com/s/154pyLjU_VmJ2ok5hJ-QLSQ?pwd=fir5",
                            "xun": "https://pan.xunlei.com/s/VOAbCVa23yWeXr1momDUyvQqA1?pwd=33mq#",
                            "uc": "https://pan.quark.cn/s/f9f2fd022142",
                            "su": "https://su.xu5.cc/post/209.html",
                            "jc": "https://x.xu5.cc/post/322.html"
                        }, {
                            "name": "达芬奇 15|mac",
                            "url": "https://pan.baidu.com/s/1xecY5KlhJtWEjxFnKPl7Sg?pwd=o3ez",
                            "xun": "https://pan.xunlei.com/s/VOAbCXPma83B8UJ0t30tixiNA1?pwd=d5yq#",
                            "uc": "https://pan.quark.cn/s/f09923155758",
                            "su": "https://su.xu5.cc/post/210.html",
                            "jc": "https://x.xu5.cc/post/320.html"
                        }]
                    }, {
                        "title": "Foundry Nuke",
                        "icon": "/static/img/icons/Nuke.svg",
                        "nav": [{
                            "name": "Foundry Nuke 15.1V4",
                            "xun": "https://pan.xunlei.com/s/VOBe-hvFamgK2o8DZClGwSwGA1?pwd=vc6c#",
                            "uc": "https://pan.quark.cn/s/080c5fcaf472",
                            "jc": "https://x.xu5.cc/post/401.html"
                        }, {
                            "name": "Foundry Nuke 13.2V3",
                            "xun": "https://pan.xunlei.com/s/VOBe-wanwKtWkGE6VagltHd6A1?pwd=sjth#",
                            "uc": "https://pan.quark.cn/s/7a37573d4321",
                            "jc": "https://x.xu5.cc/post/402.html"
                        }]
                    }, {
                        "title": "Foundry Nuke for mac",
                        "icon": "/static/img/icons/Nuke.svg",
                        "nav": [{
                            "name": "Nuke for mac 15.1V3",
                            "xun": "https://pan.xunlei.com/s/VODg8pXcpagQN1JU0UpFw68nA1?pwd=hhuf#"
                        }]
                    }, {
                        "title": "Fusion Studio",
                        "icon": "/static/img/icons/Studio.svg",
                        "nav": [{
                            "name": "Fusion 17.22",
                            "xun": "https://pan.xunlei.com/s/VOBe0FVBmaIXfc02NxaxSkAWA1?pwd=qixs#",
                            "uc": "https://pan.quark.cn/s/d720ed85e149",
                            "jc": "https://x.xu5.cc/post/403.html"
                        }]
                    }, {
                        "title": "Fusion Studio for mac",
                        "icon": "/static/img/icons/Studio.svg",
                        "nav": [{
                            "name": "Fusion|mac 18.6.4",
                            "xun": "https://pan.xunlei.com/s/VODgAjaYo7Q9KObfrcbDbOeuA1?pwd=2zr5#"
                        }]
                    }, {
                        "title": "Topaz Video Enhance AI",
                        "icon": "/static/img/icons/Enhance AI.svg",
                        "nav": [{
                            "name": "VideoAi 最新版",
                            "xun": "https://pan.xunlei.com/s/VOEwvbo_Hrf1rP1INNRwGnX4A1?pwd=7xth#",
                            "uc": "https://pan.quark.cn/s/127b34738c35"
                        }]
                    }]
                }, {
                    "tab": "图像绘图",
                    "icon": "",
                    "list": [{
                        "title": "ACDSee",
                        "icon": "static/img/icons/ACDSee.svg",
                        "nav": [{
                            "name": "ACDSee 2025",
                            "xun": "https://pan.xunlei.com/s/VOEIrTDkF-K-B2jYfXXgieKeA1?pwd=s2cp#",
                            "uc": "https://pan.quark.cn/s/015a7662f938",
                            "jc": "https://x.xu5.cc/post/504.html"
                        }, {
                            "name": "ACDSee 2024",
                            "url": "https://pan.baidu.com/s/1OiDOmxXJ36jlXolc55YZ-A?pwd=zufj",
                            "xun": "https://pan.xunlei.com/s/VOAaua0z3ck8KTQs8urcVmiNA1?pwd=tuuj#",
                            "uc": "https://pan.quark.cn/s/5c22bbb4838d",
                            "jc": "https://x.xu5.cc/post/503.html"
                        }, {
                            "name": "ACDSee 2023",
                            "url": "https://pan.baidu.com/s/1Ze0XvR2C58imuI2LFINQWw?pwd=v99u",
                            "xun": "https://pan.xunlei.com/s/VOAaubsta83B8UJ0t30tcu5KA1?pwd=mycm#",
                            "uc": "https://pan.quark.cn/s/45c71d6e6fc2",
                            "jc": "https://x.xu5.cc/post/502.html"
                        }, {
                            "name": "ACDSee 2022",
                            "url": "https://pan.baidu.com/s/1ed783KltvANQ0r7CYH9Kmg?pwd=g2bk",
                            "xun": "https://pan.xunlei.com/s/VOAaudsVjqhcVWcsT0HyPalLA1?pwd=htur#",
                            "uc": "https://pan.quark.cn/s/016f4d174a32",
                            "jc": "https://x.xu5.cc/post/501.html"
                        }, {
                            "name": "ACDSee 2020",
                            "url": "https://pan.baidu.com/s/1sdFCnJ-GXPFzQ_6bm0pbkw?pwd=a6vq",
                            "xun": "https://pan.xunlei.com/s/VOAaugR93yWeXr1momDUt8buA1?pwd=7heu#",
                            "uc": "https://pan.quark.cn/s/f941396f1df4",
                            "jc": "https://x.xu5.cc/post/500.html"
                        }, {
                            "name": "ACDSee 9.0",
                            "url": "https://pan.baidu.com/s/1bUzJ6Rvj4bblvy1xhvJqFw?pwd=j3ka",
                            "xun": "https://pan.xunlei.com/s/VOAauihFa83B8UJ0t30tcvylA1?pwd=4dsu#",
                            "uc": "https://pan.quark.cn/s/c90db96bda0a",
                            "jc": "https://x.xu5.cc/post/499.html"
                        }]
                    }, {
                        "title": "Topaz Gigapixel AI",
                        "icon": "/static/img/icons/GigapixelAI.svg",
                        "nav": [{
                            "name": "GigapixelAI 最新版",
                            "xun": "https://pan.xunlei.com/s/VOEwWUovC45_TVkdIJmoN69CA1?pwd=c3z4#",
                            "uc": "https://pan.quark.cn/s/204e79f95230"
                        }]
                    }, {
                        "title": "Topaz DeNoise AI",
                        "icon": "/static/img/icons/Diconpng.svg",
                        "nav": [{
                            "name": "TDeNoiseAI 3最新版",
                            "xun": "https://pan.xunlei.com/s/VOEwVso0AfUV9o-JOAqtf5fUA1?pwd=eds5#",
                            "uc": "https://pan.quark.cn/s/2bb59e1f5ac5"
                        }]
                    }, {
                        "title": "Topaz Photo AI",
                        "icon": "/static/img/icons/PhotoAI.svg",
                        "nav": [{
                            "name": "PhotoAI最新版",
                            "xun": "https://pan.xunlei.com/s/VOEwVZebUClNYsDoqTQaYcPLA1?pwd=wjdr#",
                            "uc": "https://pan.quark.cn/s/93b88555fc2a"
                        }]
                    }, {
                        "title": "Autodesk SketchBook",
                        "icon": "/static/img/icons/SketchBook.svg",
                        "nav": [{
                            "name": "SketchBook 2022",
                            "url": "https://pan.baidu.com/s/1_qiRFXoXEArOoZV-P3XgFw?pwd=3m87",
                            "xun": "https://pan.xunlei.com/s/VOAattehtclRAp6ajwwdx3QxA1?pwd=6dxp#",
                            "uc": "https://pan.quark.cn/s/af97622310c1",
                            "su": "https://su.xu5.cc/post/281.html",
                            "jc": "https://x.xu5.cc/post/506.html"
                        }, {
                            "name": "SketchBook 2021",
                            "url": "https://pan.baidu.com/s/1wUVEpOUYT-KYvMVdf-TLGA?pwd=qbfy",
                            "xun": "https://pan.xunlei.com/s/VOAatw1N9e43IkMi2NqHuLm9A1?pwd=6tyu#",
                            "uc": "https://pan.quark.cn/s/e9ff85215d7d",
                            "su": "https://su.xu5.cc/post/282.html",
                            "jc": "https://x.xu5.cc/post/507.html"
                        }, {
                            "name": "SketchBook 2020",
                            "url": "https://pan.baidu.com/s/1ohHP3MtDLBfSf6D58z0Fyg?pwd=zp80",
                            "xun": "https://pan.xunlei.com/s/VOAatxqKm-xVP8CEro5mDFMOA1?pwd=xwsb#",
                            "uc": "https://pan.quark.cn/s/87c66ccead19",
                            "su": "https://su.xu5.cc/post/283.html",
                            "jc": "https://x.xu5.cc/post/508.html"
                        }, {
                            "name": "SketchBook 2018",
                            "url": "https://pan.baidu.com/s/1JJ18H234-bnv2pBOwRHZZg?pwd=hxsr",
                            "xun": "https://pan.xunlei.com/s/VOAatzz-XWDu4kivZv7i9daYA1?pwd=i52r#",
                            "uc": "https://pan.quark.cn/s/26b6078e9582",
                            "su": "https://su.xu5.cc/post/284.html",
                            "jc": "https://x.xu5.cc/post/509.html"
                        }]
                    }, {
                        "title": "Paint Tool SAI",
                        "icon": "/static/img/icons/SAI.svg",
                        "nav": [{
                            "name": "SAI 2024",
                            "url": "https://pan.baidu.com/s/13wiSZ4uKb4FVE3B20IjLrA?pwd=8uma",
                            "xun": "https://pan.xunlei.com/s/VOAatCuLgVXbp0dfdIy5DUnWA1?pwd=t6hk#",
                            "uc": "https://pan.quark.cn/s/5f9408d7be99",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2023",
                            "url": "https://pan.baidu.com/s/1fubTCe87z-wfSUgdj1Oa-g?pwd=kv30",
                            "xun": "https://pan.xunlei.com/s/VOAatGQUGONOT7lMRvzF6x3DA1?pwd=qvxe#",
                            "uc": "https://pan.quark.cn/s/b6ff43e5c68a",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2022",
                            "url": "https://pan.baidu.com/s/17xE1ih68L5D_1l4nL_zqYg?pwd=8od7",
                            "xun": "https://pan.xunlei.com/s/VOAatJczR_r-zZAMhnoG6OjXA1?pwd=8fa3#",
                            "uc": "https://pan.quark.cn/s/ba8fd38ce77e",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2021",
                            "url": "https://pan.baidu.com/s/1sswd3VNY0bgHiWbTfVakPw?pwd=xufu",
                            "xun": "https://pan.xunlei.com/s/VOAatLvXptIpRc12obM3C_bsA1?pwd=c9u5#",
                            "uc": "https://pan.quark.cn/s/c4e6fb19c615",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2020",
                            "url": "https://pan.baidu.com/s/1zyaY7KBy_FidtdFDxDy7lw?pwd=c2km",
                            "xun": "https://pan.xunlei.com/s/VOAatOBcM8b-PFjZe2mcb1BVA1?pwd=yj55#",
                            "uc": "https://pan.quark.cn/s/a7ca325035e6",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2019",
                            "url": "https://pan.baidu.com/s/1yMGy8_dHgNEHLO0LYJ8NxA?pwd=kjct",
                            "xun": "https://pan.xunlei.com/s/VOAatR5g3PGiBhN4CQQ7tiWGA1?pwd=ykuv#",
                            "uc": "https://pan.quark.cn/s/f71b06cd76fd",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2018",
                            "url": "https://pan.baidu.com/s/1YvGXMPNCGM9eqroJ71VNPg?pwd=ryhy",
                            "xun": "https://pan.xunlei.com/s/VOAatTH4VFzs56Arorr1NYipA1?pwd=5pfr#",
                            "uc": "https://pan.quark.cn/s/d84125429b9d",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }, {
                            "name": "SAI 2017",
                            "url": "https://pan.baidu.com/s/1iRL3aC18wXtAuf6ZUaS5ZA?pwd=2uob",
                            "xun": "https://pan.xunlei.com/s/VOAatVlmIsoxC8LpDUR9X0kvA1?pwd=7brv#",
                            "uc": "https://pan.quark.cn/s/f5afe9862c7f",
                            "jc": "https://x.xu5.cc/post/505.html"
                        }]
                    }]
                }, {
                    "tab": "建筑设计",
                    "icon": "",
                    "list": [{
                        "title": "Autodesk revit",
                        "icon": "static/img/icons/Revit.svg",
                        "nav": [{
                            "name": "revit 2025",
                            "url": "https://pan.baidu.com/s/1MPtlQbsi91Yy_DVp_MPoMw?pwd=84a6",
                            "xun": "https://pan.xunlei.com/s/VOAeotMD9e43IkMi2NqJMdCkA1?pwd=ywz4#",
                            "uc": "https://pan.quark.cn/s/e6a3cb4c199a",
                            "jc": "https://x.xu5.cc/post/446.html"
                        }, {
                            "name": "revit 2024",
                            "url": "https://pan.baidu.com/s/1XFN917SMlTZicsglVtDxwA?pwd=v92s",
                            "xun": "https://pan.xunlei.com/s/VOAeow-3GPS1tqT-E-IM_z-qA1?pwd=6f56#",
                            "uc": "https://pan.quark.cn/s/00d148dfbb89"
                        }, {
                            "name": "revit 2023",
                            "url": "https://pan.baidu.com/s/1ZhdFsMdx_wHJd-QXg_U6cQ?pwd=khc8",
                            "xun": "https://pan.xunlei.com/s/VOAeoxsr9e43IkMi2NqJMeghA1?pwd=hs5v#",
                            "uc": "https://pan.quark.cn/s/08a9658388ee"
                        }, {
                            "name": "revit 2022",
                            "url": "https://pan.baidu.com/s/1iMG0Zg64aE0Ob_109wycOw?pwd=tv9u",
                            "xun": "https://pan.xunlei.com/s/VOAeozmKyDqGmWgHVXSZ-IciA1?pwd=8ptc#",
                            "uc": "https://pan.quark.cn/s/60b018b20ff9"
                        }, {
                            "name": "revit 2021",
                            "url": "https://pan.baidu.com/s/152DFLytr1TUgB-Js2wRE6A?pwd=tq8z",
                            "xun": "https://pan.xunlei.com/s/VOAep0i9ivz84wocylJJ-N0sA1?pwd=35hv#",
                            "uc": "https://pan.quark.cn/s/dc232c8c55fd"
                        }, {
                            "name": "revit 2020",
                            "url": "https://pan.baidu.com/s/1U-uMkKnoPUhke4wAEqBZeA?pwd=zgy2",
                            "xun": "https://pan.xunlei.com/s/VOAep32_m-xVP8CEro5nh7vbA1?pwd=h223#",
                            "uc": "https://pan.quark.cn/s/6c58701caa45"
                        }, {
                            "name": "revit 2019",
                            "url": "https://pan.baidu.com/s/1OiilQrGGsJGxAPHbv4P8nQ?pwd=75cp",
                            "xun": "https://pan.xunlei.com/s/VOAep5UutkjA9A1wN0h2aaBvA1?pwd=a2pz#",
                            "uc": "https://pan.quark.cn/s/e143d50bd225"
                        }, {
                            "name": "revit 2018",
                            "url": "https://pan.baidu.com/s/1a0ruxBFA24uc0GTwFdq2jQ?pwd=pyfp",
                            "xun": "https://pan.xunlei.com/s/VOAep7y_3PGiBhN4CQQ9MxsMA1?pwd=dz9v#",
                            "uc": "https://pan.quark.cn/s/0f03a2c0ead7"
                        }]
                    }, {
                        "title": "SketchUp草图大师",
                        "icon": "static/img/icons/SKetchUp.svg",
                        "nav": [{
                            "name": "SketchUp 2024",
                            "url": "https://pan.baidu.com/s/1jpD1hd4XWby8gFvLY7t4rw?pwd=ocqi",
                            "xun": "https://pan.xunlei.com/s/VOAbuw9S5SM6bch3h_fFvoUCA1?pwd=xzkv#",
                            "uc": "https://pan.quark.cn/s/308d841c1126",
                            "su": "https://su.xu5.cc/post/168.html",
                            "jc": "https://x.xu5.cc/post/32.html"
                        }, {
                            "name": "SketchUp 2023",
                            "url": "https://pan.baidu.com/s/14s3bjaqJQNMPjahpnIM6QQ?pwd=k1lg",
                            "xun": "https://pan.xunlei.com/s/VOAbuy86XWDu4kivZv7iXm7RA1?pwd=zgv2#",
                            "uc": "https://pan.quark.cn/s/29b911448f5f",
                            "su": "https://su.xu5.cc/post/169.html",
                            "jc": "https://x.xu5.cc/post/498.html"
                        }, {
                            "name": "SketchUp 2022",
                            "url": "https://pan.baidu.com/s/13NYM9TJqSBkBep0B33x1YQ?pwd=8oqr",
                            "xun": "https://pan.xunlei.com/s/VOAbv-p6LozyClXaX8k5gxsOA1?pwd=x5m4#",
                            "uc": "https://pan.quark.cn/s/c53775e2201e",
                            "su": "https://su.xu5.cc/post/170.html",
                            "jc": "https://x.xu5.cc/post/116.html"
                        }, {
                            "name": "SketchUp 2021",
                            "url": "https://pan.baidu.com/s/1r3Dl11RfFjQRMTIayVOzQQ?pwd=998u",
                            "xun": "https://pan.xunlei.com/s/VOAbv1WeCOoU9K0ODnf2_9OuA1?pwd=v55g#",
                            "uc": "https://pan.quark.cn/s/6ae65d6a3ee3",
                            "su": "https://su.xu5.cc/post/171.html",
                            "jc": "https://x.xu5.cc/post/118.html"
                        }, {
                            "name": "SketchUp 2020",
                            "url": "https://pan.baidu.com/s/1XZM9O_azH-g3o6X0tTV52w?pwd=x8zh",
                            "xun": "https://pan.xunlei.com/s/VOAbv3m9LozyClXaX8k5gz_YA1?pwd=ws9y#",
                            "uc": "https://pan.quark.cn/s/3f249a0f4f84",
                            "su": "https://su.xu5.cc/post/172.html",
                            "jc": "https://x.xu5.cc/post/119.html"
                        }, {
                            "name": "SketchUp 2019",
                            "url": "https://pan.baidu.com/s/1_JfHgw5PSFoAiDpid945wQ?pwd=pjrp",
                            "xun": "https://pan.xunlei.com/s/VOAbv5qmc5vCQsfuW8Uve8d_A1?pwd=9dkb#",
                            "uc": "https://pan.quark.cn/s/0e785bf4e3e6",
                            "su": "https://su.xu5.cc/post/173.html",
                            "jc": "https://x.xu5.cc/post/120.html"
                        }, {
                            "name": "SketchUp 2018",
                            "url": "https://pan.baidu.com/s/10Lt2VZ9Wu3rlHT2Ko3PvKg?pwd=rvm9",
                            "xun": "https://pan.xunlei.com/s/VOAbv8Uua83B8UJ0t30u053lA1?pwd=a26h#",
                            "uc": "https://pan.quark.cn/s/18d1f7dd2d37",
                            "su": "https://su.xu5.cc/post/174.html",
                            "jc": "https://x.xu5.cc/post/121.html"
                        }, {
                            "name": "SketchUp 2017",
                            "url": "https://pan.baidu.com/s/1M1DqG4lL2mP6s-kpcJsRlg?pwd=9mru",
                            "xun": "https://pan.xunlei.com/s/VOAbvAx0TZUEL58Uh04DrAeoA1?pwd=cze4#",
                            "uc": "https://pan.quark.cn/s/5e0508f81c41",
                            "su": "https://su.xu5.cc/post/175.html",
                            "jc": "https://x.xu5.cc/post/122.html"
                        }, {
                            "name": "SketchUp 2016",
                            "url": "https://pan.baidu.com/s/13wNKEeIublF9XZigwA0lkg?pwd=9y8l",
                            "xun": "https://pan.xunlei.com/s/VOAbvD0j17p82f1YWXjREd1JA1?pwd=3dck#",
                            "uc": "https://pan.quark.cn/s/f61a28d38145",
                            "su": "https://su.xu5.cc/post/176.html",
                            "jc": "https://x.xu5.cc/post/123.html"
                        }, {
                            "name": "SketchUp 2015",
                            "url": "https://pan.baidu.com/s/1JOtMnlzHWn2TwkBX9v83yw?pwd=tacy",
                            "xun": "https://pan.xunlei.com/s/VOAbvFO77TZlOOUcRUPmDxcjA1?pwd=5phv#",
                            "uc": "https://pan.quark.cn/s/82105bfb2d0f",
                            "su": "https://su.xu5.cc/post/177.html",
                            "jc": "https://x.xu5.cc/post/124.html"
                        }, {
                            "name": "SketchUp 2014",
                            "url": "https://pan.baidu.com/s/1pNQsavJ1l0tYH8fRTnJnag?pwd=p4gt",
                            "xun": "https://pan.xunlei.com/s/VOAbvHbpa83B8UJ0t30u08fiA1?pwd=es9m#",
                            "uc": "https://pan.quark.cn/s/398080df7b54",
                            "su": "https://su.xu5.cc/post/178.html",
                            "jc": "https://x.xu5.cc/post/125.html"
                        }, {
                            "name": "SketchUp 2013",
                            "url": "https://pan.baidu.com/s/1AOVrxKosm03Mu3zZq_a1EQ?pwd=z254",
                            "xun": "https://pan.xunlei.com/s/VOAbvK43SN7RdpC7tQ54gEvqA1?pwd=chui#",
                            "uc": "https://pan.quark.cn/s/0794df9ce900",
                            "su": "https://su.xu5.cc/post/179.html",
                            "jc": "https://x.xu5.cc/post/126.html"
                        }]
                    }, {
                        "title": "SketchUp草图大师MAC版",
                        "icon": "static/img/icons/SKetchUp.svg",
                        "nav": [{
                            "name": "SketchUp 2024|mac",
                            "url": "https://pan.baidu.com/s/1UhdR2iZonoO-7ECiHes4ZQ?pwd=vw1n",
                            "xun": "https://pan.xunlei.com/s/VOAbvWTd_bT-Arqvd0uK3tJbA1?pwd=5rpp#",
                            "uc": "https://pan.quark.cn/s/1c4b0f338f3f",
                            "su": "https://su.xu5.cc/post/180.html",
                            "jc": "https://x.xu5.cc/post/33.html"
                        }, {
                            "name": "SketchUp 2023|mac",
                            "url": "https://pan.baidu.com/s/1sKp7tJYjxmnDCaj7FhmISQ?pwd=y8j2",
                            "xun": "https://pan.xunlei.com/s/VOAbvYbTpBNPY6MqzPHLBgqIA1?pwd=p3c6#",
                            "uc": "https://pan.quark.cn/s/f79e883518cf",
                            "su": "https://su.xu5.cc/post/181.html",
                            "jc": "https://x.xu5.cc/post/142.html"
                        }, {
                            "name": "SketchUp 2021|mac",
                            "url": "https://pan.baidu.com/s/1bIzzhamHW2i4XHeeJxjoMw?pwd=4dcr",
                            "xun": "https://pan.xunlei.com/s/VOAbvaGX3PGiBhN4CQQ8HY4oA1?pwd=2fp3#",
                            "uc": "https://pan.quark.cn/s/fb1bbffbd76b",
                            "su": "https://su.xu5.cc/post/182.html"
                        }, {
                            "name": "SketchUp 2020|mac",
                            "url": "https://pan.baidu.com/s/1g_yZqTM14uomt05FYgoglw?pwd=j81n",
                            "xun": "https://pan.xunlei.com/s/VOAbvcEW3PGiBhN4CQQ8HZ_IA1?pwd=wwy5#",
                            "uc": "https://pan.quark.cn/s/ba52b00b4b8f",
                            "su": "https://su.xu5.cc/post/183.html"
                        }, {
                            "name": "SketchUp 2019|mac",
                            "url": "https://pan.baidu.com/s/1RVe032EISpitZkhfUXi8sg?pwd=7jwp",
                            "xun": "https://pan.xunlei.com/s/VOAbve3O9e43IkMi2NqIHRBXA1?pwd=yauc#",
                            "uc": "https://pan.quark.cn/s/110927f79f08",
                            "su": "https://su.xu5.cc/post/184.html"
                        }]
                    }, {
                        "title": "Lumion",
                        "icon": "static/img/icons/lumion.svg",
                        "nav": [{
                            "name": "Lumion 2023.4.2",
                            "url": "https://pan.baidu.com/s/1Ovu4Eypk0HqikjvF2EPdbw?pwd=z20q",
                            "xun": "https://pan.xunlei.com/s/VOAby9qgPkfr8DvmexD4D9VYA1?pwd=c7rv#",
                            "uc": "https://pan.quark.cn/s/a5ff7540edb0",
                            "jc": "https://x.xu5.cc/post/292.html"
                        }, {
                            "name": "Lumion 12.5",
                            "url": "https://pan.baidu.com/s/14khKmxaSstvKbVFbGL_FAg?pwd=xubv",
                            "xun": "https://pan.xunlei.com/s/VOAbyBtkyDqGmWgHVXSXrO4kA1?pwd=ujzx#",
                            "uc": "https://pan.quark.cn/s/06a19d53bc4f",
                            "jc": "https://x.xu5.cc/post/293.html"
                        }, {
                            "name": "Lumion 12.0",
                            "url": "https://pan.baidu.com/s/1ixhfG5YAzBDFyjSBhzgLOQ?pwd=9w13",
                            "xun": "https://pan.xunlei.com/s/VOAbyDYgVvZnyQgLfpmCojVMA1?pwd=4gwc#",
                            "uc": "https://pan.quark.cn/s/f78854f94b89",
                            "jc": "https://x.xu5.cc/post/294.html"
                        }, {
                            "name": "Lumion 10",
                            "url": "https://pan.baidu.com/s/1BHM3XxXvM1I5FI3RFNhyEQ?pwd=nteb",
                            "xun": "https://pan.xunlei.com/s/VOAbyJie3ck8KTQs8urcu0qjA1?pwd=mvfm#",
                            "uc": "https://pan.quark.cn/s/008651df395a",
                            "jc": "https://x.xu5.cc/post/163.html"
                        }, {
                            "name": "Lumion 9",
                            "url": "https://pan.baidu.com/s/15WnQw8j-VMI6RgO15ii8tQ?pwd=bxn8",
                            "xun": "https://pan.xunlei.com/s/VOAbyLqBIPn9DWokIjFlkXybA1?pwd=kjgf#",
                            "uc": "https://pan.quark.cn/s/75efe2f663b4",
                            "jc": "https://x.xu5.cc/post/164.html"
                        }, {
                            "name": "Lumion 7",
                            "url": "https://pan.baidu.com/s/1jDs41q-YV7pSNJQaf2jEzg?pwd=r3v6",
                            "xun": "https://pan.xunlei.com/s/VOAbyOoZtkjA9A1wN0h1XbjdA1?pwd=f5tj#",
                            "uc": "https://pan.quark.cn/s/4150c7d1e385",
                            "jc": "https://x.xu5.cc/post/165.html"
                        }, {
                            "name": "Lumion 6",
                            "url": "https://pan.baidu.com/s/19R6sFdpDZM9fhVRSTGoEBA?pwd=gsje",
                            "xun": "https://pan.xunlei.com/s/VOAbyQMu-7-iZ2UpTeLJdXvCA1?pwd=7mj5#",
                            "uc": "https://pan.quark.cn/s/610b051eb46f",
                            "jc": "https://x.xu5.cc/post/166.html"
                        }, {
                            "name": "Lumion 5",
                            "url": "https://pan.baidu.com/s/12_Fuhfz9ppiAFQ2NQHLXVg?pwd=phfo",
                            "xun": "https://pan.xunlei.com/s/VOAbyRw6QzDSnT2515feLqeZA1?pwd=46yi#",
                            "uc": "https://pan.quark.cn/s/206d9d78c11e",
                            "jc": "https://x.xu5.cc/post/167.html"
                        }]
                    }, {
                        "title": "Twinmotion",
                        "icon": "static/img/icons/Twinmotion.svg",
                        "nav": [{
                            "name": "Twinmotion   V2019",
                            "url": "https://pan.baidu.com/s/1kGhJnYaHlGqBKbjX3_kOsA?pwd=jtmb",
                            "xun": "https://pan.xunlei.com/s/VOAbu7BZI5tWX5IfBjXbNg_dA1?pwd=zvk5#",
                            "uc": "https://pan.quark.cn/s/36aa3ddbc380",
                            "jc": "https://x.xu5.cc/post/210.html"
                        }]
                    }]
                }, {
                    "tab": "工业工程",
                    "icon": "",
                    "list": [{
                        "title": "Autodesk Inventor Professional",
                        "icon": "static/img/icons/Inventor.svg",
                        "nav": [{
                            "name": "Inventor 2025",
                            "url": "https://pan.baidu.com/s/1h5DkQQRhIyoNJj6-7rgksw?pwd=5iv3",
                            "xun": "https://pan.xunlei.com/s/VOAb2OQ-Pkfr8DvmexD3r5OGA1?pwd=d8yk#",
                            "uc": "https://pan.quark.cn/s/bfde7837133d",
                            "jc": "https://x.xu5.cc/post/444.html"
                        }, {
                            "name": "Inventor 2024",
                            "url": "https://pan.baidu.com/s/1-Jc0PO23syktbEJ9ctYIEA?pwd=muli",
                            "xun": "https://pan.xunlei.com/s/VOAb2QYvn8TgItOLGdk1jrAfA1?pwd=fa89#",
                            "uc": "https://pan.quark.cn/s/515e05814c07"
                        }, {
                            "name": "Inventor 2023",
                            "url": "https://pan.baidu.com/s/11HUdyP3toypR1QByMJA6AQ?pwd=us7e",
                            "xun": "https://pan.xunlei.com/s/VOAb2SW0VFzs56Arorr1R4HJA1?pwd=ruju#",
                            "uc": "https://pan.quark.cn/s/6de69ec220a3"
                        }, {
                            "name": "Inventor 2022",
                            "url": "https://pan.baidu.com/s/12qcYTcqVx3G6Kb2BNpKy_A?pwd=beue",
                            "xun": "https://pan.xunlei.com/s/VOAb2UJlf6ylI6WalmkHPAhrA1?pwd=j8ei#",
                            "uc": "https://pan.quark.cn/s/2a172df8b230"
                        }]
                    }, {
                        "title": "DS CATIA Composer",
                        "icon": "/static/img/icons/Catia-P3-V5-6R2020.svg",
                        "nav": [{
                            "name": "Catia Composer 2024",
                            "url": "https://pan.baidu.com/s/12AR7AkVksLZ8Zk8-yx7hVA?pwd=l2o6",
                            "xun": "https://pan.xunlei.com/s/VOAav0sGn8TgItOLGdk1gLteA1?pwd=b66u#",
                            "uc": "https://pan.quark.cn/s/12d4e02df3ef",
                            "jc": "https://x.xu5.cc/post/261.html"
                        }, {
                            "name": "Catia Composer 2022",
                            "url": "https://pan.baidu.com/s/1U4NWNQtjJ4CY6SKxil0fxQ?pwd=4oza",
                            "xun": "https://pan.xunlei.com/s/VOAav45NI5tWX5IfBjXb-z5TA1?pwd=qxjj#",
                            "uc": "https://pan.quark.cn/s/74e817b8cab9",
                            "jc": "https://x.xu5.cc/post/262.html"
                        }, {
                            "name": "Catia Composer 2020",
                            "url": "https://pan.baidu.com/s/17IfdqAzO9-8_rodka-sIdw?pwd=oxbf",
                            "xun": "https://pan.xunlei.com/s/VOAav6ARc5vCQsfuW8UvHf6_A1?pwd=qc7k#",
                            "uc": "https://pan.quark.cn/s/f4d50c6010d6",
                            "jc": "https://x.xu5.cc/post/263.html"
                        }, {
                            "name": "Catia Composer 2019",
                            "url": "https://pan.baidu.com/s/1irAf5A9LsSh0nPpZEDHONQ?pwd=cjyc",
                            "xun": "https://pan.xunlei.com/s/VOAav8-g17p82f1YWXjQraf3A1?pwd=45hv#",
                            "uc": "https://pan.quark.cn/s/b65f974f79cd",
                            "jc": "https://x.xu5.cc/post/264.html"
                        }, {
                            "name": "Catia Composer 2018",
                            "url": "https://pan.baidu.com/s/1M19VYbVA8AVdJvxzV_WFdQ?pwd=25u0",
                            "xun": "https://pan.xunlei.com/s/VOAavAGQc5vCQsfuW8UvHgyUA1?pwd=6qa2#",
                            "uc": "https://pan.quark.cn/s/b3866498c556",
                            "jc": "https://x.xu5.cc/post/265.html"
                        }, {
                            "name": "Catia Composer 2017",
                            "url": "https://pan.baidu.com/s/1XI0a_rRWF1pccFjQ6h4UkQ?pwd=co0h",
                            "xun": "https://pan.xunlei.com/s/VOAavC8PXWDu4kivZv7iA56SA1?pwd=ebmv#",
                            "uc": "https://pan.quark.cn/s/a294b449ae25",
                            "jc": "https://x.xu5.cc/post/266.html"
                        }]
                    }, {
                        "title": "Catia",
                        "icon": "/static/img/icons/Catia.svg",
                        "nav": [{
                            "name": "Catia 2021",
                            "xun": "https://pan.xunlei.com/s/VODKyFGHixXjQPQtSDw4z5NrA1?pwd=7z5q#",
                            "uc": "https://pan.quark.cn/s/9c4017f5ead8",
                            "jc": "https://x.xu5.cc/post/447.html"
                        }, {
                            "name": "Catia 2020",
                            "xun": "https://pan.xunlei.com/s/VODKRF7JVLHwAzMdtkBjEB32A1?pwd=usxh#",
                            "uc": "https://pan.quark.cn/s/c12904773033",
                            "jc": "https://x.xu5.cc/post/388.html"
                        }]
                    }, {
                        "title": "Mastercam",
                        "icon": "/static/img/icons/Mastercam.svg",
                        "nav": [{
                            "name": " Mastercam 2024",
                            "xun": "https://pan.xunlei.com/s/VOBdwee77b9zVSLxhbRqi2lrA1?pwd=xmrx#",
                            "uc": "https://pan.quark.cn/s/e2d27477d7b2",
                            "jc": "https://x.xu5.cc/post/390.html"
                        }, {
                            "name": " Mastercam 2023",
                            "xun": "https://pan.xunlei.com/s/VOBdwohIPUuRtpTpfHlCc1vYA1?pwd=yk8y#",
                            "uc": "https://pan.quark.cn/s/5e83ec8f3889",
                            "jc": "https://x.xu5.cc/post/391.html"
                        }, {
                            "name": " Mastercam 2022",
                            "xun": "https://pan.xunlei.com/s/VOBdwt58nwBQbnuvcMyLs9raA1?pwd=4r4s#",
                            "uc": "https://pan.quark.cn/s/3de889f20f12",
                            "jc": "https://x.xu5.cc/post/392.html"
                        }, {
                            "name": " Mastercam 2021",
                            "xun": "https://pan.xunlei.com/s/VOBdwyVosb2_YqUe2_bIu1mFA1?pwd=5ub3#",
                            "uc": "https://pan.quark.cn/s/175a209540a8",
                            "jc": "https://x.xu5.cc/post/393.html"
                        }]
                    }, {
                        "title": "ANSYS",
                        "icon": "/static/img/icons/ANSYS.svg",
                        "nav": [{
                            "name": "ANSYS 2024 R1",
                            "xun": "https://pan.xunlei.com/s/VOBdxOu7KiExsA3Qz6MdPWGNA1?pwd=q7aq#",
                            "uc": "https://pan.quark.cn/s/edb4bddc4f5e",
                            "jc": "https://x.xu5.cc/post/394.html"
                        }, {
                            "name": "ANSYS 2023 R2",
                            "xun": "https://pan.xunlei.com/s/VOBdxYXpwKtWkGE6Vagls1q9A1?pwd=ahca#",
                            "uc": "https://pan.quark.cn/s/113ab54b0c98",
                            "jc": "https://x.xu5.cc/post/395.html"
                        }, {
                            "name": "ANSYS 2022 R1",
                            "xun": "https://pan.xunlei.com/s/VOBdxcbtamgK2o8DZClGvWX6A1?pwd=656r#",
                            "uc": "https://pan.quark.cn/s/43b4982fc4b6",
                            "jc": "https://x.xu5.cc/post/396.html"
                        }, {
                            "name": "ANSYS 2021 R2",
                            "xun": "https://pan.xunlei.com/s/VOBdxikOvQgTcWWVfafBbQ9rA1?pwd=e89i#",
                            "uc": "https://pan.quark.cn/s/ebfa614d66c3",
                            "jc": "https://x.xu5.cc/post/397.html"
                        }]
                    }, {
                        "title": "EPLAN Electric P8",
                        "icon": "/static/img/icons/eplan.svg",
                        "nav": [{
                            "name": "Eplan 2024",
                            "url": "https://pan.baidu.com/s/169B1-cmYYE_hfOqWTaT7-Q?pwd=v735",
                            "xun": "https://pan.xunlei.com/s/VOAb7kvMm-xVP8CEro5mIDDUA1?pwd=qj73#",
                            "uc": "https://pan.quark.cn/s/c4fb8aff8a81",
                            "jc": "https://x.xu5.cc/post/267.html"
                        }, {
                            "name": "Eplan 2023",
                            "url": "https://pan.baidu.com/s/1uSKDsNWclIs8D-tFac0ewQ?pwd=lu1x",
                            "xun": "https://pan.xunlei.com/s/VOAb7mfd_bT-Arqvd0uJkzlTA1?pwd=yzgi#",
                            "uc": "https://pan.quark.cn/s/7324a6a019a9",
                            "jc": "https://x.xu5.cc/post/268.html"
                        }, {
                            "name": "Eplan 2022",
                            "url": "https://pan.baidu.com/s/1c7cXorR55MvW7sshbaWHqg?pwd=jfiq",
                            "xun": "https://pan.xunlei.com/s/VOAb7pnD17p82f1YWXjQvwfrA1?pwd=r86h#",
                            "uc": "https://pan.quark.cn/s/2093e0db4211",
                            "jc": "https://x.xu5.cc/post/269.html"
                        }, {
                            "name": "Eplan 2.9",
                            "url": "https://pan.baidu.com/s/1OfYszaJN03B5UEufZeUieA?pwd=n5yd",
                            "xun": "https://pan.xunlei.com/s/VOAb7rhlIsoxC8LpDUR9auxMA1?pwd=8ghx#",
                            "uc": "https://pan.quark.cn/s/f0591a1a7953",
                            "jc": "https://x.xu5.cc/post/270.html"
                        }, {
                            "name": "Eplan 2.7",
                            "url": "https://pan.baidu.com/s/1oZ1mWs6A4PMccBhaO1bGDw?pwd=od1m",
                            "xun": "https://pan.xunlei.com/s/VOAb7tuqpBNPY6MqzPHKtQV4A1?pwd=8xzk#",
                            "uc": "https://pan.quark.cn/s/6373bef12642",
                            "jc": "https://x.xu5.cc/post/271.html"
                        }, {
                            "name": "Eplan 2.6",
                            "url": "https://pan.baidu.com/s/1UDHBfJX3EPN1diinYcKtuw?pwd=1ovv",
                            "xun": "https://pan.xunlei.com/s/VOAb7w0MTZUEL58Uh04DYRFOA1?pwd=dz5r#",
                            "uc": "https://pan.quark.cn/s/956a90e4027f",
                            "jc": "https://x.xu5.cc/post/272.html"
                        }, {
                            "name": "Eplan 2.5",
                            "url": "https://pan.baidu.com/s/1WlsMu_LVJD67RY4tdlUWqQ?pwd=m0yb",
                            "xun": "https://pan.xunlei.com/s/VOAb7xw57TZlOOUcRUPlv-haA1?pwd=pjck#",
                            "uc": "https://pan.quark.cn/s/c45b9dbab4df",
                            "jc": "https://x.xu5.cc/post/273.html"
                        }]
                    }, {
                        "title": "SolidWorks",
                        "icon": "/static/img/icons/SolidWorks.svg",
                        "nav": [{
                            "name": "SolidWorks 2025 sp1.1",
                            "xun": "https://pan.xunlei.com/s/VOJOFyzIeCTahQivRbh56NnqA1?pwd=wkkk#",
                            "uc": "https://pan.quark.cn/s/2e29335025fb",
                            "jc": "https://x.xu5.cc/post/240.html"
                        }, {
                            "name": "SolidWorks 2025 sp0",
                            "xun": "https://pan.xunlei.com/s/VOFFFrw_sLIEgJGCu2hqMnnOA1?pwd=7f2q#",
                            "uc": "https://pan.quark.cn/s/07e26d1e334f",
                            "jc": "https://x.xu5.cc/post/240.html"
                        }, {
                            "name": "SolidWorks 2024",
                            "url": "https://pan.baidu.com/s/1JwCc4_VRQfOGYvila_-RaQ?pwd=49ut",
                            "xun": "https://pan.xunlei.com/s/VOAb2ij8o7HCghBg0Jv7ZAl_A1?pwd=idv8#",
                            "uc": "https://pan.quark.cn/s/b99b1eae1b6d",
                            "jc": "https://x.xu5.cc/post/240.html"
                        }, {
                            "name": "SolidWorks 2023",
                            "url": "https://pan.baidu.com/s/1t63_r7-0aEaSXfWiojup2w?pwd=ivv6",
                            "xun": "https://pan.xunlei.com/s/VOAb2l45XWDu4kivZv7iD6TXA1?pwd=dk5n#",
                            "uc": "https://pan.quark.cn/s/a65d7a7acfab",
                            "jc": "https://x.xu5.cc/post/241.html"
                        }, {
                            "name": "SolidWorks 2022",
                            "url": "https://pan.baidu.com/s/1dJxgaqv7lcwyHVmQZ6U-aA?pwd=pupy",
                            "xun": "https://pan.xunlei.com/s/VOAb2n0MXWDu4kivZv7iD7ihA1?pwd=ibjv#",
                            "uc": "https://pan.quark.cn/s/9993bf912f54",
                            "jc": "https://x.xu5.cc/post/242.html"
                        }, {
                            "name": "SolidWorks 2021",
                            "url": "https://pan.baidu.com/s/1nDpzChhUQp1W0U-Clda0Yg?pwd=jgtt",
                            "xun": "https://pan.xunlei.com/s/VOAb2ozlGONOT7lMRvzFAhM0A1?pwd=tpep#",
                            "uc": "https://pan.quark.cn/s/3c55949c1108",
                            "jc": "https://x.xu5.cc/post/243.html"
                        }, {
                            "name": "SolidWorks 2020",
                            "url": "https://pan.baidu.com/s/1vkhGw9DwLyhaU-oal1hv3g?pwd=jhbp",
                            "xun": "https://pan.xunlei.com/s/VOAb2r94Dr78N3exXOZWbcm9A1?pwd=iqym#",
                            "uc": "https://pan.quark.cn/s/9622a445c167",
                            "jc": "https://x.xu5.cc/post/244.html"
                        }, {
                            "name": "SolidWorks 2019",
                            "url": "https://pan.baidu.com/s/1AYPEIwDrlpHnxJudCQZ1Ug?pwd=frg7",
                            "xun": "https://pan.xunlei.com/s/VOAb2t0ZgVXbp0dfdIy5HPsFA1?pwd=dzkr#",
                            "uc": "https://pan.quark.cn/s/3f358dbeea8c",
                            "jc": "https://x.xu5.cc/post/245.html"
                        }, {
                            "name": "SolidWorks 2018",
                            "url": "https://pan.baidu.com/s/1zLw-farbGiTyJJAA0ujSHg?pwd=sc6u",
                            "xun": "https://pan.xunlei.com/s/VOAb2vMvc5vCQsfuW8UvK_svA1?pwd=hn4z#",
                            "uc": "https://pan.quark.cn/s/9909cb3a3527",
                            "jc": "https://x.xu5.cc/post/246.html"
                        }, {
                            "name": "SolidWorks 2017",
                            "url": "https://pan.baidu.com/s/1Zxolsr1VdkMuDAZVQPaOlQ?pwd=csnf",
                            "xun": "https://pan.xunlei.com/s/VOAb2xhXTZUEL58Uh04DWsbLA1?pwd=fkby#",
                            "uc": "https://pan.quark.cn/s/cff0400a6bdf",
                            "jc": "https://x.xu5.cc/post/247.html"
                        }]
                    }, {
                        "title": "SolidCAM",
                        "icon": "/static/img/icons/SolidCAM.svg",
                        "nav": [{
                            "name": "SolidCAM 2025 sp0",
                            "xun": "https://pan.xunlei.com/s/VOFFG7xbZkS-1pza-kQDi48yA1?pwd=skrf#",
                            "uc": "https://pan.quark.cn/s/f0205f739428"
                        }, {
                            "name": "SolidCAM 2024",
                            "xun": "https://pan.xunlei.com/s/VOC7bjedT42rESxvNxrP4_n0A1?pwd=rnab#",
                            "uc": "https://pan.quark.cn/s/f20af544f166",
                            "jc": "https://x.xu5.cc/post/452.html"
                        }, {
                            "name": "SolidCAM 2023",
                            "url": "https://pan.baidu.com/s/1fCAEqAboL0FU8Kndj_oMuA?pwd=536u",
                            "xun": "https://pan.xunlei.com/s/VOAaq3PRf6ylI6WalmkHKn-vA1?pwd=quiq#",
                            "uc": "https://pan.quark.cn/s/53be166a1fe8"
                        }, {
                            "name": "SolidCAM 2022",
                            "url": "https://pan.baidu.com/s/1RxaH8OAb9rjeiQTdULgAUg?pwd=2m2z",
                            "xun": "https://pan.xunlei.com/s/VOAaq5eO17p82f1YWXjQpwPHA1?pwd=sj5c#",
                            "uc": "https://pan.quark.cn/s/f95ec7fd8c61"
                        }, {
                            "name": "SolidCAM 2021",
                            "url": "https://pan.baidu.com/s/15ch9QwX9BR3ai3HELPzgkA?pwd=0abc",
                            "xun": "https://pan.xunlei.com/s/VOAaq846TZUEL58Uh04DSGpcA1?pwd=zmxd#",
                            "uc": "https://pan.quark.cn/s/caff2ee99aef"
                        }, {
                            "name": "SolidCAM 2020",
                            "url": "https://pan.baidu.com/s/15MYa139G_GhSIgwl1Ix3Nw?pwd=9lz1",
                            "xun": "https://pan.xunlei.com/s/VOAaq9yfjqhcVWcsT0HyO1d4A1?pwd=fgt3#",
                            "uc": "https://pan.quark.cn/s/ce0126902c16"
                        }]
                    }, {
                        "title": "PTC Creo",
                        "icon": "/static/img/icons/Creo_20Parametric.svg",
                        "nav": [{
                            "name": "Creo 11.0",
                            "url": "https://pan.baidu.com/s/10V3oD11WBs_SudHu3OZ_mA?pwd=ybb7",
                            "xun": "https://pan.xunlei.com/s/VOAb8zvCTGvLpavAUvhfARrfA1?pwd=8k7p#",
                            "uc": "https://pan.quark.cn/s/c317054ce323",
                            "jc": "https://x.xu5.cc/post/254.html"
                        }, {
                            "name": "Creo 10.0",
                            "url": "https://pan.baidu.com/s/1QWyuXJk44qpyuhH3wQRF6Q?pwd=czta",
                            "xun": "https://pan.xunlei.com/s/VOAb90o1M8b-PFjZe2mcgYZNA1?pwd=42c3#",
                            "uc": "https://pan.quark.cn/s/75d7a6e9d589",
                            "jc": "https://x.xu5.cc/post/255.html"
                        }, {
                            "name": "Creo 9.0",
                            "url": "https://pan.baidu.com/s/18iae8AbazHWNfN-8M8ejqg?pwd=wi72",
                            "xun": "https://pan.xunlei.com/s/VOAb92ySSN7RdpC7tQ54NuOBA1?pwd=ek5z#",
                            "uc": "https://pan.quark.cn/s/f3c85878ef9c",
                            "jc": "https://x.xu5.cc/post/256.html"
                        }, {
                            "name": "Creo 8.0",
                            "url": "https://pan.baidu.com/s/1rdRik7qBJ_RobaZDa59uVw?pwd=ct6l",
                            "xun": "https://pan.xunlei.com/s/VOAb950ftkjA9A1wN0h1D1WMA1?pwd=jvy6#",
                            "uc": "https://pan.quark.cn/s/21ad9dba3cb1",
                            "jc": "https://x.xu5.cc/post/257.html"
                        }, {
                            "name": "Creo 7.0",
                            "url": "https://pan.baidu.com/s/1KrjufCCl1dcDBuy71upI4Q?pwd=49s3",
                            "xun": "https://pan.xunlei.com/s/VOAb96j2XWDu4kivZv7iFL7DA1?pwd=w6u4#",
                            "uc": "https://pan.quark.cn/s/4611c5a01b83",
                            "jc": "https://x.xu5.cc/post/258.html"
                        }]
                    }, {
                        "title": "UG NX",
                        "icon": "/static/img/icons/ug.svg",
                        "nav": [{
                            "name": "UG NX 2412",
                            "xun": "https://pan.xunlei.com/s/VOESetQvu1ovQR_zeoQad-_sA1?pwd=yv2a#",
                            "uc": "https://pan.quark.cn/s/3bbac5dcff3d",
                            "jc": "https://x.xu5.cc/post/513.html"
                        }, {
                            "name": "UG NX 2406",
                            "xun": "https://pan.xunlei.com/s/VOCqzuzM9cx9igw4fK0LgDC2A1?pwd=ngb5#",
                            "uc": "https://pan.quark.cn/s/1391dbfb6373",
                            "jc": "https://x.xu5.cc/post/436.html"
                        }, {
                            "name": "UG NX 2312",
                            "xun": "https://pan.xunlei.com/s/VOAbAVITptIpRc12obM3IgEkA1?pwd=sgp5#",
                            "uc": "https://pan.quark.cn/s/613620779de2",
                            "jc": "https://x.xu5.cc/post/235.html"
                        }, {
                            "name": "UG NX 2306",
                            "xun": "https://pan.xunlei.com/s/VOCr-SBUlG2HppXq8X5OYq4iA1?pwd=bhv4#",
                            "uc": "https://pan.quark.cn/s/456a09f18d73",
                            "jc": "https://x.xu5.cc/post/439.html"
                        }, {
                            "name": "UG NX 2206",
                            "xun": "https://pan.xunlei.com/s/VOCr-U7KlbV41ii4AOcH5nIeA1?pwd=7t88#",
                            "uc": "https://pan.quark.cn/s/60f4ae863e09",
                            "jc": "https://x.xu5.cc/post/440.html"
                        }, {
                            "name": "UG 2023",
                            "xun": "https://pan.xunlei.com/s/VOAbASlI9e43IkMi2NqHzl5lA1?pwd=xe5j#",
                            "uc": "https://pan.quark.cn/s/6744e1ebde23",
                            "jc": "https://x.xu5.cc/post/234.html"
                        }, {
                            "name": "UG 12.0",
                            "xun": "https://pan.xunlei.com/s/VOErtVJO85R5e4HRGrsfLKokA1?pwd=srjy#",
                            "uc": "https://pan.quark.cn/s/06a9a3a5f658",
                            "jc": "https://x.xu5.cc/post/236.html"
                        }]
                    }, {
                        "title": "博途",
                        "icon": "/static/img/icons/botu.svg",
                        "nav": [{
                            "name": "博途 19",
                            "xun": "https://pan.xunlei.com/s/VOBdvGfRsb2_YqUe2_bItWI9A1?pwd=4res#",
                            "uc": "https://pan.quark.cn/s/2f72a90bcd01",
                            "jc": "https://x.xu5.cc/post/398.html"
                        }, {
                            "name": "博途 18",
                            "xun": "https://pan.xunlei.com/s/VOBdvd3gALZZwX_QPr0UIqa1A1?pwd=3rh9#",
                            "uc": "https://pan.quark.cn/s/a2db0e1f6ab2",
                            "jc": "https://x.xu5.cc/post/399.html"
                        }, {
                            "name": "博途 17",
                            "xun": "https://pan.xunlei.com/s/VOBdviMawKtWkGE6VaglrWiLA1?pwd=x7m6#",
                            "uc": "https://pan.quark.cn/s/af05d42d97a3",
                            "jc": "https://x.xu5.cc/post/400.html"
                        }]
                    }, {
                        "title": "Solid Edge",
                        "icon": "static/img/icons/Solid_20Edge.svg",
                        "nav": [{
                            "name": "Se 2024",
                            "url": "https://pan.baidu.com/s/1HCSpTcPDCQ7TFhGoUfV5LA?pwd=u00o",
                            "xun": "https://pan.xunlei.com/s/VOAbuMqk-7-iZ2UpTeLJbaLwA1?pwd=ppcq#",
                            "uc": "https://pan.quark.cn/s/9240663569ca",
                            "jc": "https://x.xu5.cc/post/304.html"
                        }, {
                            "name": "Se 2023",
                            "url": "https://pan.baidu.com/s/1SjwhKy19DyfvIYn4uox2Bg?pwd=1sxg",
                            "xun": "https://pan.xunlei.com/s/VOAbuP5Qo7HCghBg0Jv7sy9XA1?pwd=7sd9#",
                            "uc": "https://pan.quark.cn/s/b5f2eeb08268",
                            "jc": "https://x.xu5.cc/post/305.html"
                        }, {
                            "name": "Se 2022",
                            "url": "https://pan.baidu.com/s/1EouQrcqZnustyZFN49tjCQ?pwd=odog",
                            "xun": "https://pan.xunlei.com/s/VOAbuR3XXWDu4kivZv7iXOmuA1?pwd=9b44#",
                            "uc": "https://pan.quark.cn/s/de0827fd49d9",
                            "jc": "https://x.xu5.cc/post/306.html"
                        }, {
                            "name": "Se 2021",
                            "url": "https://pan.baidu.com/s/15HqBpET9sIpgS66gWnb1pw?pwd=aluj",
                            "xun": "https://pan.xunlei.com/s/VOAbuStUtkjA9A1wN0h1VdJ-A1?pwd=45xq#",
                            "uc": "https://pan.quark.cn/s/9aad00ace918",
                            "jc": "https://x.xu5.cc/post/307.html"
                        }, {
                            "name": "Se 2020",
                            "url": "https://pan.baidu.com/s/1qIKLI5luefZuk87vE1U2Bg?pwd=qnj0",
                            "xun": "https://pan.xunlei.com/s/VOAbuUsdptIpRc12obM3a-AxA1?pwd=2mjf#",
                            "uc": "https://pan.quark.cn/s/bbdc6050ce6d",
                            "jc": "https://x.xu5.cc/post/308.html"
                        }, {
                            "name": "Se ST10",
                            "url": "https://pan.baidu.com/s/1BSUACCm4wwa1n0yDsPcSfA?pwd=fkmu",
                            "xun": "https://pan.xunlei.com/s/VOAbuX2D9e43IkMi2NqIGwkJA1?pwd=3smd#",
                            "uc": "https://pan.quark.cn/s/96b54a32a3d7",
                            "jc": "https://x.xu5.cc/post/309.html"
                        }, {
                            "name": "Se ST9",
                            "url": "https://pan.baidu.com/s/1ZS4h3AgDG5Z-gK0-mS4T8A?pwd=ffki",
                            "xun": "https://pan.xunlei.com/s/VOAbuYw4gVXbp0dfdIy5bNg4A1?pwd=hgxg#",
                            "uc": "https://pan.quark.cn/s/85c0099cd6b8",
                            "jc": "https://x.xu5.cc/post/310.html"
                        }]
                    }, {
                        "title": "中望 3D",
                        "icon": "static/img/icons/ZWCAD.svg",
                        "nav": [{
                            "name": "ZW3D 2025",
                            "url": "https://pan.baidu.com/s/1EaaFSZJbzW5RoeRn1yTZwQ?pwd=f7ph",
                            "xun": "https://pan.xunlei.com/s/VOAauHqe-7-iZ2UpTeLJDrQyA1?pwd=cd2f#",
                            "uc": "https://pan.quark.cn/s/46c3159db577",
                            "jc": "https://x.xu5.cc/post/494.html"
                        }, {
                            "name": "ZW3D 2024",
                            "url": "https://pan.baidu.com/s/1c8oVinB0tum-e9CHIcfnDA?pwd=tudb",
                            "xun": "https://pan.xunlei.com/s/VOAauJjrR_r-zZAMhnoG6h-oA1?pwd=22cr#",
                            "uc": "https://pan.quark.cn/s/3d5af324e666",
                            "jc": "https://x.xu5.cc/post/496.html"
                        }, {
                            "name": "ZW3D 2023",
                            "url": "https://pan.baidu.com/s/1nVMakY74A3GFkvUj6kTiug?pwd=xdei",
                            "xun": "https://pan.xunlei.com/s/VOAauLp5R_r-zZAMhnoG6izyA1?pwd=rdra#",
                            "uc": "https://pan.quark.cn/s/e58a81c6fb03",
                            "jc": "https://x.xu5.cc/post/497.html"
                        }]
                    }]
                }, {
                    "tab": "办公工具",
                    "icon": "",
                    "list": [{
                        "title": "WinRAR解压缩工具",
                        "icon": "static/img/icons/winrar.svg",
                        "nav": [{
                            "name": "Winrar 7.01",
                            "xun": "https://www.winrar.com.cn/",
                            "uc": "https://www.winrar.com.cn/"
                        }]
                    }, {
                        "title": "Mac系统虚拟机Parallels Desktop",
                        "icon": "static/img/icons/winrar.svg",
                        "nav": [{
                            "name": "ParallelsDesktop 20.1.1",
                            "xun": "https://pan.xunlei.com/s/VODg7nWx5gA7rCUACMunej_QA1?pwd=kbvq#",
                            "uc": "https://pan.quark.cn/s/644145a30d56",
                            "jc": "https://x.xu5.cc/post/516.html"
                        }]
                    }, {
                        "title": "Microsoft office 全家桶",
                        "icon": "static/img/icons/office.svg",
                        "nav": [{
                            "name": "Office 2024专业版",
                            "url": "https://pan.baidu.com/s/11OPf5oxGaNzJqNzB9yNYyQ?pwd=6kpe",
                            "xun": "https://pan.xunlei.com/s/VOAfnPZ8c5vChKVXk73iat_rA1?pwd=gk2m#",
                            "uc": "https://pan.quark.cn/s/edc3778693d1",
                            "jc": "https://x.xu5.cc/post/329.html"
                        }, {
                            "name": "Office 2021专业版",
                            "url": "https://pan.baidu.com/s/1p2r7iVYVJPtcwI2oDMADlA?pwd=m73v",
                            "xun": "https://pan.xunlei.com/s/VOAfnSE717p82f1YWXjShMHgA1?pwd=ndym#",
                            "uc": "https://pan.quark.cn/s/59884b135e87"
                        }, {
                            "name": "Office 2019专业版",
                            "url": "https://pan.baidu.com/s/1Jx6cUKVW0wY3cqwkeEEOjQ?pwd=bwm3",
                            "xun": "https://pan.xunlei.com/s/VOAfnU6r5SM6bch3h_fHPLneA1?pwd=n8hh#",
                            "uc": "https://pan.quark.cn/s/07b863dbfbfe"
                        }, {
                            "name": "Office 2016专业版",
                            "url": "https://pan.baidu.com/s/1IL86wZMb5ZatxNJaIrlf1A?pwd=u0zf",
                            "xun": "https://pan.xunlei.com/s/VOAfnW2V17p82f1YWXjShNmQA1?pwd=wftt#",
                            "uc": "https://pan.quark.cn/s/d735b34ebf13"
                        }, {
                            "name": "Office 2013专业版",
                            "url": "https://pan.baidu.com/s/1YgAtXNyTTmBv8QhqjI4HWA?pwd=jy05",
                            "xun": "https://pan.xunlei.com/s/VOAfnY7dtkjA9A1wN0h2zK9lA1?pwd=jure#",
                            "uc": "https://pan.quark.cn/s/245fdf6cefe4"
                        }, {
                            "name": "Office 2010专业版",
                            "url": "https://pan.baidu.com/s/1q2FeDzZofqTGSoT8PFsRFA?pwd=pjm5",
                            "xun": "https://pan.xunlei.com/s/VOAfnZzy9e43IkMi2NqJkanCA1?pwd=dvw3#",
                            "uc": "https://pan.quark.cn/s/443693f0c42f"
                        }, {
                            "name": "Office 2007专业版",
                            "url": "https://pan.baidu.com/s/16XHi7DKBWNm0t0g8hqt9nw?pwd=t70j",
                            "xun": "https://pan.xunlei.com/s/VOAfnbj4gVXbp0dfdIy77BzDA1?pwd=fadf#",
                            "uc": "https://pan.quark.cn/s/66a6b9981ce9"
                        }, {
                            "name": "Office 2003专业版",
                            "url": "https://pan.baidu.com/s/1mpjXJI82HUlU_KgQ9EAEYQ?pwd=a7px",
                            "xun": "https://pan.xunlei.com/s/VOAfnjGBR_r-zZAMhnoHzNEUA1?pwd=ikrc#",
                            "uc": "https://pan.quark.cn/s/d02a8f8dbf7f"
                        }, {
                            "name": "通用激活工具",
                            "xun": "https://pan.xunlei.com/s/VOE7Ty5AJB5p5jRAb-IH4J8tA1?pwd=4ez8#"
                        }]
                    }, {
                        "title": "Microsoft office 全家桶 for mac",
                        "icon": "static/img/icons/office.svg",
                        "nav": [{
                            "name": "Office 2024 专业版 for mac",
                            "xun": "https://pan.xunlei.com/s/VOJOGtQs1_xfTxmHQ08QIYE8A1?pwd=66af#",
                            "uc": "https://pan.quark.cn/s/9d91a296507b"
                        }, {
                            "name": "Office 2021专业版 for mac",
                            "url": "https://pan.baidu.com/s/1_nntEMzfgbsYysTxbigLlA?pwd=r3ip",
                            "xun": "https://pan.xunlei.com/s/VOAfo84_tkjA9A1wN0h2zYbyA1?pwd=stc6#",
                            "uc": "https://pan.quark.cn/s/0aaa3b022377",
                            "jc": "https://x.xu5.cc/post/328.html"
                        }]
                    }, {
                        "title": "WPS office",
                        "icon": "static/img/icons/wps.svg",
                        "nav": [{
                            "name": "WPS 2023",
                            "url": "https://pan.baidu.com/s/1DM-cPhKn1rqe480TIEkmCA?pwd=n0kb",
                            "xun": "https://pan.xunlei.com/s/VOF4n3eVWCUwC3iz5SiDBNhxA1?pwd=he4s#",
                            "uc": "https://pan.quark.cn/s/ee42dd119f31"
                        }, {
                            "name": "WPS 2019",
                            "url": "https://pan.baidu.com/s/14IByYQF5IiCPEUZwn3zjuQ?pwd=rcu2",
                            "xun": "https://pan.xunlei.com/s/VOF4n8_NyF5B6KsYWx4m7MocA1?pwd=rekj#",
                            "uc": "https://pan.quark.cn/s/f50e248e1706"
                        }, {
                            "name": "WPS 2016",
                            "url": "https://pan.baidu.com/s/16XIr4t25eeLqmr1VgDkLkw?pwd=u83t",
                            "xun": "https://pan.xunlei.com/s/VOF4nCxhTfy80lgRQLsomv7gA1?pwd=fpai#",
                            "uc": "https://pan.quark.cn/s/a88bbda6051e"
                        }]
                    }, {
                        "title": "XMind思维导图",
                        "icon": "static/img/icons/xmind.svg",
                        "nav": [{
                            "name": "XMind|2024",
                            "uc": "https://pan.quark.cn/s/019687d27832",
                            "xun": "https://pan.xunlei.com/s/VOE7TLczZA_oijEsYUJ6fh_KA1?pwd=62v3#",
                            "jc": "https://x.xu5.cc/post/517.html"
                        }, {
                            "name": "XMind|2023",
                            "uc": "https://pan.quark.cn/s/88252aad7617",
                            "xun": "https://pan.xunlei.com/s/VOE7TNjWplwSSVSKm7ES0WeJA1?pwd=8dr2#",
                            "jc": "https://x.xu5.cc/post/517.html"
                        }, {
                            "name": "XMind|2022",
                            "uc": "https://pan.quark.cn/s/fb752318545c",
                            "xun": "https://pan.xunlei.com/s/VOE7TWDvBwaXY3UcKYy2aOQ4A1?pwd=kt78#",
                            "jc": "https://x.xu5.cc/post/517.html"
                        }, {
                            "name": "XMind|2021",
                            "uc": "https://pan.quark.cn/s/3e49b76183d5",
                            "xun": "https://pan.xunlei.com/s/VOE7T_AVcLtsj6HFfncKVHW-A1?pwd=pmz4#",
                            "jc": "https://x.xu5.cc/post/517.html"
                        }]
                    }]
                }, {
                    "tab": "数据分析",
                    "icon": "",
                    "list": [{
                        "title": "Tableau",
                        "icon": "static/img/icons/Tableau.svg",
                        "nav": [{
                            "name": "Tableau 2023",
                            "url": "https://pan.baidu.com/s/1Gvf17_XddXHcu0IZ-eWxrw?pwd=6ud8",
                            "xun": "https://pan.xunlei.com/s/VOAjc4Oa17p82f1YWXjUB1_DA1?pwd=ny62#",
                            "uc": "https://pan.quark.cn/s/7f8db98d3c14",
                            "jc": "https://x.xu5.cc/post/484.html"
                        }, {
                            "name": "Tableau 2021",
                            "url": "https://pan.baidu.com/s/1OaYRpXAoEa3udVNexf_LBw?pwd=fvcu",
                            "xun": "https://pan.xunlei.com/s/VOAjc8E8_bT-Arqvd0uN27KoA1?pwd=gu9c#",
                            "uc": "https://pan.quark.cn/s/311012274180",
                            "jc": "https://x.xu5.cc/post/485.html"
                        }, {
                            "name": "Tableau 2020",
                            "url": "https://pan.baidu.com/s/1YUSolwsD-vlQko8Lm8-dBQ?pwd=mhix",
                            "xun": "https://pan.xunlei.com/s/VOAjcAwP-7-iZ2UpTeLMakVqA1?pwd=tn55#",
                            "uc": "https://pan.quark.cn/s/c6190b078ddc",
                            "jc": "https://x.xu5.cc/post/486.html"
                        }, {
                            "name": "Tableau 2019.4",
                            "url": "https://pan.baidu.com/s/1J9Hj5hF0BFst51x8cGwDEA?pwd=dxkt",
                            "xun": "https://pan.xunlei.com/s/VOAjcGaZf6ylI6WalmkKec2FA1?pwd=5y9f#",
                            "uc": "https://pan.quark.cn/s/7a75d461e7be",
                            "jc": "https://x.xu5.cc/post/487.html"
                        }, {
                            "name": "Tableau 2019.1",
                            "url": "https://pan.baidu.com/s/1FMSAUhxGZBgqH5A_4ryh-g?pwd=yfux",
                            "xun": "https://pan.xunlei.com/s/VOAjcD6En8TgItOLGdk52dBkA1?pwd=xnk3#",
                            "uc": "https://pan.quark.cn/s/2c6ffed5b00e",
                            "jc": "https://x.xu5.cc/post/488.html"
                        }, {
                            "name": "Tableau 2018",
                            "url": "https://pan.baidu.com/s/1mX9LHCGkgXlZJTbXWfG9Ow?pwd=r9ux",
                            "xun": "https://pan.xunlei.com/s/VOAjcMikR_r-zZAMhnoJThPqA1?pwd=v4v2#",
                            "uc": "https://pan.quark.cn/s/906d0bb76d3b",
                            "jc": "https://x.xu5.cc/post/489.html"
                        }]
                    }, {
                        "title": "MATLAB",
                        "icon": "static/img/icons/MATLAB.svg",
                        "nav": [{
                            "name": "MATLAB R2024b",
                            "url": "https://pan.baidu.com/s/1t6tmJmPMgC1qRLl6D2VOXA?pwd=vc66",
                            "xun": "https://pan.xunlei.com/s/VOAjeNSZo7HCghBg0JvArIl8A1?pwd=2hjn#",
                            "uc": "https://pan.quark.cn/s/6fe29f38077d",
                            "jc": "https://x.xu5.cc/post/437.html"
                        }, {
                            "name": "MATLAB R2023b",
                            "url": "https://pan.baidu.com/s/1ziOGCtTeOKnjFIWrVogiTg?pwd=igeg",
                            "xun": "https://pan.xunlei.com/s/VOD0SaX92e6TQ_qzav0G-0j2A1?pwd=ehuw#",
                            "uc": "https://pan.quark.cn/s/6b7cb588e122",
                            "jc": "https://x.xu5.cc/post/441.html"
                        }, {
                            "name": "MATLAB R2022b",
                            "url": "https://pan.baidu.com/s/175ek_uyi21a0Kz5VJmOFYw?pwd=nx22",
                            "xun": "https://pan.xunlei.com/s/VOD0SfQLr4Bsgd_5OQPbnyNNA1?pwd=ttg6#",
                            "uc": "https://pan.quark.cn/s/eb1508cc1029",
                            "jc": "https://x.xu5.cc/post/442.html"
                        }, {
                            "name": "MATLAB R2021b",
                            "url": "https://pan.baidu.com/s/18f7M21lmhetgXzU6M8VKlg?pwd=s1qp",
                            "xun": "https://pan.xunlei.com/s/VOD0SiUGIyIiA526ocXhkx53A1?pwd=cg6a#",
                            "uc": "https://pan.quark.cn/s/834cc1c7c53f",
                            "jc": "https://x.xu5.cc/post/443.html"
                        }]
                    }, {
                        "title": "Stata",
                        "icon": "static/img/icons/Stata.svg",
                        "nav": [{
                            "name": "Stata 18",
                            "url": "https://pan.baidu.com/s/1HGFDqWLg1Z1R_9-izvGJ0A?pwd=fc4e",
                            "xun": "https://pan.xunlei.com/s/VOAjc_LKm-xVP8CEro5p_0G1A1?pwd=nytp#",
                            "uc": "https://pan.quark.cn/s/0fdfd8a2ec42",
                            "jc": "https://x.xu5.cc/post/453.html"
                        }, {
                            "name": "Stata 17",
                            "url": "https://pan.baidu.com/s/1IlBUgBgVDnE-ZRAF-JPmpQ?pwd=6zsk",
                            "xun": "https://pan.xunlei.com/s/VOAjcb8FGONOT7lMRvzITEqPA1?pwd=rkum#",
                            "uc": "https://pan.quark.cn/s/32cbca617f21",
                            "jc": "https://x.xu5.cc/post/454.html"
                        }, {
                            "name": "Stata 16",
                            "url": "https://pan.baidu.com/s/11CC6q5LUlsDOu2ZZ6oUeTQ?pwd=prve",
                            "xun": "https://pan.xunlei.com/s/VOAjcd2t3yWeXr1momDYD6k_A1?pwd=in7p#",
                            "uc": "https://pan.quark.cn/s/0a8e4d2de07e",
                            "jc": "https://x.xu5.cc/post/455.html"
                        }, {
                            "name": "Stata 15",
                            "url": "https://pan.baidu.com/s/1ooAWdSQo90LdaGSa37WtRA?pwd=ef3t",
                            "xun": "https://pan.xunlei.com/s/VOAjcetdCOoU9K0ODnf5XCC8A1?pwd=n3eh#",
                            "uc": "https://pan.quark.cn/s/2f17eaeacf30",
                            "jc": "https://x.xu5.cc/post/456.html"
                        }]
                    }, {
                        "title": "Origin",
                        "icon": "static/img/icons/Origin.svg",
                        "nav": [{
                            "name": "Origin 2024",
                            "url": "https://pan.baidu.com/s/1Qh_y5HRq8TS72XrI9Q40bQ?pwd=hxb5",
                            "xun": "https://pan.xunlei.com/s/VOAjdV1p3ck8KTQs8urfpFKtA1?pwd=xjc6#",
                            "uc": "https://pan.quark.cn/s/86df30d4de28",
                            "jc": "https://x.xu5.cc/post/457.html"
                        }, {
                            "name": "Origin 2022 SR1",
                            "url": "https://pan.baidu.com/s/1aO9es3z1ZLUZQZ_67tyW6Q?pwd=ea37",
                            "xun": "https://pan.xunlei.com/s/VOAjdXOkQzDSnT2515fhIVVZA1?pwd=sjzh#",
                            "uc": "https://pan.quark.cn/s/b0cbdf10aa01",
                            "jc": "https://x.xu5.cc/post/458.html"
                        }, {
                            "name": "Origin 2021",
                            "url": "https://pan.baidu.com/s/1RNMskp1M2vpRKz-N5FpJ1w?pwd=27h3",
                            "xun": "https://pan.xunlei.com/s/VOAjdZTNgVXbp0dfdIy8dXflA1?pwd=knrs#",
                            "uc": "https://pan.quark.cn/s/6932921f3190",
                            "jc": "https://x.xu5.cc/post/459.html"
                        }, {
                            "name": "Origin 2019",
                            "url": "https://pan.baidu.com/s/13nboc7KMVY1GsGysxQjoyA?pwd=j6cy",
                            "xun": "https://pan.xunlei.com/s/VOAjdaWja83B8UJ0t30wynlDA1?pwd=5ris#",
                            "uc": "https://pan.quark.cn/s/770eaa575ffa",
                            "jc": "https://x.xu5.cc/post/460.html"
                        }, {
                            "name": "Origin 2018",
                            "url": "https://pan.baidu.com/s/1rhrjGTTOR7rQTt1-OFfF-w?pwd=bxw1",
                            "xun": "https://pan.xunlei.com/s/VOAjdcngtkjA9A1wN0h4S5iCA1?pwd=jb64#",
                            "uc": "https://pan.quark.cn/s/f34846eb5b55",
                            "jc": "https://x.xu5.cc/post/461.html"
                        }, {
                            "name": "Origin 2017",
                            "url": "https://pan.baidu.com/s/1As4LB7knU6vkXlpeLiGhJw?pwd=a6p3",
                            "xun": "https://pan.xunlei.com/s/VOAjdfgSDr78N3exXOZZv4wxA1?pwd=udru#",
                            "uc": "https://pan.quark.cn/s/bf2f141d55e3",
                            "jc": "https://x.xu5.cc/post/462.html"
                        }]
                    }, {
                        "title": "Minitab",
                        "icon": "static/img/icons/Minitab.svg",
                        "nav": [{
                            "name": "Minitab 2022",
                            "url": "https://pan.baidu.com/s/17QWzqGrLSFmL69-qGoYbbA?pwd=qpzw",
                            "xun": "https://pan.xunlei.com/s/VOAje1RP17p82f1YWXjUBhkWA1?pwd=f89v#",
                            "uc": "https://pan.quark.cn/s/0ff26b62751b",
                            "jc": "https://x.xu5.cc/post/463.html"
                        }, {
                            "name": "Minitab 2021",
                            "url": "https://pan.baidu.com/s/1qmVsYLqkTopeC19zIxvaMw?pwd=ks47",
                            "xun": "https://pan.xunlei.com/s/VOAje3yLyDqGmWgHVXSa0s8dA1?pwd=h2mn#",
                            "uc": "https://pan.quark.cn/s/e80f74a1c974",
                            "jc": "https://x.xu5.cc/post/464.html"
                        }]
                    }, {
                        "title": "Mathematica",
                        "icon": "static/img/icons/Mathematica.svg",
                        "nav": [{
                            "name": "Mathematica 14.1",
                            "url": "https://pan.baidu.com/s/1LzzNpBnqEE8bqbP2LeRDgw?pwd=wbsh",
                            "xun": "https://pan.xunlei.com/s/VOAjen4PtclRAp6ajwwhJnwtA1?pwd=hhmv#",
                            "uc": "https://pan.quark.cn/s/3ab5373bd101",
                            "jc": "https://x.xu5.cc/post/465.html"
                        }, {
                            "name": "Mathematica 14.0",
                            "url": "https://pan.baidu.com/s/1agMVeUddxR6LXlaXmfgYcg?pwd=t9mt",
                            "xun": "https://pan.xunlei.com/s/VOAjepLHPkfr8DvmexD7D-OpA1?pwd=isrk#",
                            "uc": "https://pan.quark.cn/s/bf1f3b773026",
                            "jc": "https://x.xu5.cc/post/466.html"
                        }, {
                            "name": "Mathematica 13.3.1",
                            "url": "https://pan.baidu.com/s/1FToMt6B0qC04W5NEVZkczg?pwd=62nx",
                            "xun": "https://pan.xunlei.com/s/VOAjerKAtkjA9A1wN0h4SaYaA1?pwd=985x#",
                            "uc": "https://pan.quark.cn/s/622da722e0ef",
                            "jc": "https://x.xu5.cc/post/467.html"
                        }, {
                            "name": "Mathematica 12.0",
                            "url": "https://pan.baidu.com/s/1Ry7XVcrgwo9tOW5eJ9qcqw?pwd=nf4q",
                            "xun": "https://pan.xunlei.com/s/VOAjetVI9e43IkMi2NqLGoaaA1?pwd=5zyz#",
                            "uc": "https://pan.quark.cn/s/4aba613da1e5",
                            "jc": "https://x.xu5.cc/post/468.html"
                        }, {
                            "name": "Mathematica 9.0",
                            "url": "https://pan.baidu.com/s/1pTfHTCyB7o6yTjLdRW5zLg?pwd=4xm4",
                            "xun": "https://pan.xunlei.com/s/VOAjevjEn8TgItOLGdk53WYgA1?pwd=hpng#",
                            "uc": "https://pan.quark.cn/s/72e45f933e12",
                            "jc": "https://x.xu5.cc/post/469.html"
                        }]
                    }, {
                        "title": "Maple",
                        "icon": "static/img/icons/Maple.svg",
                        "nav": [{
                            "name": "Maple 2024",
                            "url": "https://pan.baidu.com/s/1YIdPOONzZwW6v_TeH-J_wg?pwd=iyjy",
                            "xun": "https://pan.xunlei.com/s/VOAjfoBaTZUEL58Uh04GprkVA1?pwd=sf5j#",
                            "uc": "https://pan.quark.cn/s/ac0cb03d640e",
                            "jc": "https://x.xu5.cc/post/470.html"
                        }, {
                            "name": "Maple 2023",
                            "url": "https://pan.baidu.com/s/1yn09v3MA-OgEhczFvhZXJQ?pwd=5eb7",
                            "xun": "https://pan.xunlei.com/s/VOAjfqHl5SM6bch3h_fIuD4vA1?pwd=56gq#",
                            "uc": "https://pan.quark.cn/s/cc91894ea45a",
                            "jc": "https://x.xu5.cc/post/471.html"
                        }, {
                            "name": "Maple 2022",
                            "url": "https://pan.baidu.com/s/1_YG6WmwaBmTqK458B39Bvg?pwd=2x4p",
                            "xun": "https://pan.xunlei.com/s/VOAjfsQvSN7RdpC7tQ57dtWMA1?pwd=iisd#",
                            "uc": "https://pan.quark.cn/s/a9879a65610f",
                            "jc": "https://x.xu5.cc/post/472.html"
                        }, {
                            "name": "Maple 2021",
                            "url": "https://pan.baidu.com/s/10P4QmpAyKa6kBVn0oZglpQ?pwd=zgnm",
                            "xun": "https://pan.xunlei.com/s/VOAjfuZFIPn9DWokIjFogocgA1?pwd=eump#",
                            "uc": "https://pan.quark.cn/s/b2cd4f1d5d3c",
                            "jc": "https://x.xu5.cc/post/473.html"
                        }, {
                            "name": "Maple 2020",
                            "url": "https://pan.baidu.com/s/11afrfKbeHS4L5D2qPNpBsw?pwd=w25b",
                            "xun": "https://pan.xunlei.com/s/VOAjfwadTGvLpavAUvhiTL9UA1?pwd=a9u7#",
                            "uc": "https://pan.quark.cn/s/d810ad895d6c",
                            "jc": "https://x.xu5.cc/post/474.html"
                        }, {
                            "name": "Maple 2019",
                            "url": "https://pan.baidu.com/s/1cJFy-TymwjkTTMGlMhqWPw?pwd=6mfk",
                            "xun": "https://pan.xunlei.com/s/VOAjfyYiVvZnyQgLfpmFlbqjA1?pwd=96vm#",
                            "uc": "https://pan.quark.cn/s/acafbebf5e08",
                            "jc": "https://x.xu5.cc/post/475.html"
                        }]
                    }, {
                        "title": "EViews",
                        "icon": "static/img/icons/EViews.svg",
                        "nav": [{
                            "name": "EViews 13",
                            "url": "https://pan.baidu.com/s/1IqGgWkZpZ1MDvjVmTGIBDw?pwd=siza",
                            "xun": "https://pan.xunlei.com/s/VOAjfQ4rPkfr8DvmexD7DCPWA1?pwd=giut#",
                            "uc": "https://pan.quark.cn/s/94bb73055d09",
                            "jc": "https://x.xu5.cc/post/476.html"
                        }, {
                            "name": "EViews 12",
                            "url": "https://pan.baidu.com/s/1A1JbBhanUABEkDgm-_EVfg?pwd=d6tj",
                            "xun": "https://pan.xunlei.com/s/VOAjfRu-GPS1tqT-E-IOSonLA1?pwd=b2p6#",
                            "uc": "https://pan.quark.cn/s/5b45f9182ad1",
                            "jc": "https://x.xu5.cc/post/477.html"
                        }, {
                            "name": "EViews 11",
                            "url": "https://pan.baidu.com/s/1xLI6r5_rUG0ufRsk746nQA?pwd=cbn6",
                            "xun": "https://pan.xunlei.com/s/VOAjfTixpBNPY6MqzPHO9-2uA1?pwd=wz39#",
                            "uc": "https://pan.quark.cn/s/1806b2e2b3c0",
                            "jc": "https://x.xu5.cc/post/478.html"
                        }, {
                            "name": "EViews 9.0",
                            "url": "https://pan.baidu.com/s/1ksilF96uYKtXBCvKhTJWww?pwd=37qr",
                            "xun": "https://pan.xunlei.com/s/VOAjfW4JI5tWX5IfBjXeOWSNA1?pwd=ercq#",
                            "uc": "https://pan.quark.cn/s/02d93baba4e9",
                            "jc": "https://x.xu5.cc/post/479.html"
                        }, {
                            "name": "EViews 8.0",
                            "url": "https://pan.baidu.com/s/1Aiza4ucPnfv7y0Rs7ld4og?pwd=6qnj",
                            "xun": "https://pan.xunlei.com/s/VOAjfY6dc5vChKVXk73ksG2aA1?pwd=fyvx#",
                            "uc": "https://pan.quark.cn/s/b943ff3e1f58",
                            "jc": "https://x.xu5.cc/post/480.html"
                        }]
                    }, {
                        "title": "LINGO",
                        "icon": "static/img/icons/LINGO.svg",
                        "nav": [{
                            "name": "LINGO 18",
                            "url": "https://pan.baidu.com/s/1aatW0IN_um9dD4RK19OnTw?pwd=u8j7",
                            "xun": "https://pan.xunlei.com/s/VOAjfAVVDr78N3exXOZZvaZsA1?pwd=73ec#",
                            "uc": "https://pan.quark.cn/s/a0127ee00ce6",
                            "jc": "https://x.xu5.cc/post/481.html"
                        }, {
                            "name": "LINGO 17",
                            "url": "https://pan.baidu.com/s/1aawTosxoCUVclAFEfXF8DA?pwd=8xvw",
                            "xun": "https://pan.xunlei.com/s/VOAjfCI8Dr78N3exXOZZvb2MA1?pwd=c49j#",
                            "uc": "https://pan.quark.cn/s/402cb8ff1c71",
                            "jc": "https://x.xu5.cc/post/482.html"
                        }, {
                            "name": "LINGO 15",
                            "url": "https://pan.baidu.com/s/14Jjox7zfeeADxQBGQUVkKg?pwd=t8q7",
                            "xun": "https://pan.xunlei.com/s/VOAjfE5LtkjA9A1wN0h4SidjA1?pwd=k6qy#",
                            "uc": "https://pan.quark.cn/s/22eaa108e123",
                            "jc": "https://x.xu5.cc/post/483.html"
                        }]
                    }]
                }, {
                    "tab": "电子电路",
                    "icon": "",
                    "list": [{
                        "title": "Altium Designer",
                        "icon": "static/img/icons/Altium_20Designer.svg",
                        "nav": [{
                            "name": "Altium Designer 2025",
                            "xun": "https://pan.xunlei.com/s/VOFF6iBIWjN10iOj4AxeJTP5A1?pwd=rjhb#",
                            "uc": "https://pan.quark.cn/s/3c0207c7456d",
                            "jc": "https://x.xu5.cc/post/384.html"
                        }, {
                            "name": "Altium Designer 2024",
                            "xun": "https://pan.xunlei.com/s/VOBdrX0I4Q_za3Tomq_ulpGGA1?pwd=um7r#",
                            "uc": "https://pan.quark.cn/s/34cf164ee26c",
                            "jc": "https://x.xu5.cc/post/384.html"
                        }, {
                            "name": "Altium Designer 2023",
                            "xun": "https://pan.xunlei.com/s/VOBdrZFAHKqz2GcsspIw850aA1?pwd=8ypk#",
                            "uc": "https://pan.quark.cn/s/413afc6b002f",
                            "jc": "https://x.xu5.cc/post/385.html"
                        }, {
                            "name": "Altium Designer 2022",
                            "xun": "https://pan.xunlei.com/s/VOBdrdjjRZBIKQnx07z89_KUA1?pwd=kwyb#",
                            "uc": "https://pan.quark.cn/s/5cccd636e3a1",
                            "jc": "https://x.xu5.cc/post/386.html"
                        }, {
                            "name": "Altium Designer 2021",
                            "xun": "https://pan.xunlei.com/s/VOAeofE3I5tWX5IfBjXcUVBOA1?pwd=swjs#",
                            "uc": "https://pan.quark.cn/s/638b4c801fd6",
                            "jc": "https://x.xu5.cc/post/492.html"
                        }]
                    }, {
                        "title": "Cadence",
                        "icon": "static/img/icons/Cadence.svg",
                        "nav": [{
                            "name": "Cadence 24.1",
                            "xun": "https://pan.xunlei.com/s/VOIt6wpIFaKN0x6euZynFLhkA1?pwd=nfqd#",
                            "uc": "https://pan.quark.cn/s/7e62ad58242f",
                            "jc": "https://x.xu5.cc/post/491.html"
                        }, {
                            "name": "Cadence 23.1",
                            "xun": "https://pan.xunlei.com/s/VOIt73nSuvknhwdHaK4kmSkgA1?pwd=tq2r#",
                            "uc": "https://pan.quark.cn/s/5199abfe99e4",
                            "jc": "https://x.xu5.cc/post/491.html"
                        }, {
                            "name": "Cadence 22.1",
                            "xun": "https://pan.xunlei.com/s/VOBdt3WFrnaBZCcO2vZLHKobA1?pwd=dmw3#",
                            "uc": "https://pan.quark.cn/s/d582bb66b7b0",
                            "jc": "https://x.xu5.cc/post/491.html"
                        }, {
                            "name": "Cadence 17.4",
                            "xun": "https://pan.xunlei.com/s/VOBdtD9HzzLsMzIt6-KBT8HTA1?pwd=u4fg#",
                            "uc": "https://pan.quark.cn/s/6dbc0b8ac117",
                            "jc": "https://x.xu5.cc/post/404.html"
                        }]
                    }, {
                        "title": "Multisim",
                        "icon": "static/img/icons/Multisim.svg",
                        "nav": [{
                            "name": "Multisim 14.3",
                            "xun": "https://pan.xunlei.com/s/VOBdtu0F4Q_za3Tomq_um_gaA1?pwd=95xf#",
                            "uc": "https://pan.quark.cn/s/6b1531030e35",
                            "jc": "https://x.xu5.cc/post/380.html"
                        }, {
                            "name": "Multisim 14.2",
                            "xun": "https://pan.xunlei.com/s/VOBdu1oVzzLsMzIt6-KBTXpoA1?pwd=qmvp#",
                            "uc": "https://pan.quark.cn/s/f568e3948ab4",
                            "jc": "https://x.xu5.cc/post/381.html"
                        }, {
                            "name": "Multisim 14.0",
                            "xun": "https://pan.xunlei.com/s/VOBdu7I_mDrM6L8tli6RDJGLA1?pwd=zeag#",
                            "uc": "https://pan.quark.cn/s/54184b89ddcb",
                            "jc": "https://x.xu5.cc/post/382.html"
                        }, {
                            "name": "Multisim 13",
                            "xun": "https://pan.xunlei.com/s/VOBduEGhSkTdvRvJ-FBj41esA1?pwd=wvun#",
                            "uc": "https://pan.quark.cn/s/0320360d2148",
                            "jc": "https://x.xu5.cc/post/383.html"
                        }]
                    }, {
                        "title": "Proteus",
                        "icon": "static/img/icons/Proteus.svg",
                        "nav": [{
                            "name": "proteus 8.17",
                            "xun": "https://pan.xunlei.com/s/VOBduaI7nwBQbnuvcMyLrQfwA1?pwd=z7qd#",
                            "uc": "https://pan.quark.cn/s/aa4081f90400",
                            "jc": "https://x.xu5.cc/post/378.html"
                        }, {
                            "name": "proteus 8.13",
                            "xun": "https://pan.xunlei.com/s/VOBduhykXWtGS8pM0OBU50J0A1?pwd=6b8t#",
                            "uc": "https://pan.quark.cn/s/a3ee0f854ebe",
                            "jc": "https://x.xu5.cc/post/379.html"
                        }]
                    }]
                }, {
                    "tab": "2D动画",
                    "icon": "",
                    "list": [{
                        "title": "Cartoon Animator",
                        "icon": "static/img/icons/Cartoon Animator.svg",
                        "nav": [{
                            "name": "Cartoon Animator 5.31 ",
                            "url": "https://pan.baidu.com/s/11v47UdRDx94LAN-h6fylQg?pwd=3jbi",
                            "xun": "https://pan.xunlei.com/s/VOAc0Xf8VvZnyQgLfpmCqOiYA1?pwd=q83z#",
                            "uc": "https://pan.quark.cn/s/0cb7694bd297",
                            "su": "https://su.xu5.cc/post/340.html",
                            "jc": "https://x.xu5.cc/post/438.html"
                        }]
                    }, {
                        "title": "TVPaint Animation",
                        "icon": "static/img/icons/TVPaint.svg",
                        "nav": [{
                            "name": "TVPaint Animation 10.0",
                            "xun": "https://pan.xunlei.com/s/VOBdzwCTFYtm_KukSdqRBJpcA1?pwd=wjut#",
                            "uc": "https://pan.quark.cn/s/8454b1535d66",
                            "jc": "https://x.xu5.cc/post/387.html"
                        }]
                    }]
                }, {
                    "tab": "JetBrains",
                    "icon": "",
                    "list": [{
                        "title": "JetBrains全家桶补丁",
                        "icon": "static/img/icons/JetBrains.svg",
                        "nav": [{
                            "name": "全家桶补丁",
                            "xun": "https://pan.xunlei.com/s/VOBErlqpvaC87PvRJb4X6VKLA1?pwd=apkt#",
                            "uc": "https://pan.quark.cn/s/c7a765fd76f3",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains dataspell",
                        "icon": "static/img/icons/dataspell.svg",
                        "nav": [{
                            "name": "JetBrains dataspell 2024.2.2",
                            "xun": "https://pan.xunlei.com/s/VOBEghLF-hYQTES3wxLGcipUA1?pwd=r65j#",
                            "uc": "https://pan.quark.cn/s/dcec516b9d87",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains datagrip",
                        "icon": "static/img/icons/datagrip.svg",
                        "nav": [{
                            "name": "JetBrains datagrip 2024.2.2",
                            "xun": "https://pan.xunlei.com/s/VOBEi-eGolVGsJvKWidFyE0TA1?pwd=fret#",
                            "uc": "https://pan.quark.cn/s/b8e1436fc095",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains Rider",
                        "icon": "static/img/icons/Rider.svg",
                        "nav": [{
                            "name": "JetBrains Rider 2024.2.7",
                            "xun": "https://pan.xunlei.com/s/VOBEiJZLblfaFnteYA-l32gdA1?pwd=6k9w#",
                            "uc": "https://pan.quark.cn/s/13d00de4a49e",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains pycharm",
                        "icon": "static/img/icons/pycharm.svg",
                        "nav": [{
                            "name": "JetBrains pycharm 2024.2.4",
                            "xun": "https://pan.xunlei.com/s/VOBEicl9XsbKe9mv4n6qml9BA1?pwd=mskm#",
                            "uc": "https://pan.quark.cn/s/f57e5f09f331",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains idea",
                        "icon": "static/img/icons/IDEA.svg",
                        "nav": [{
                            "name": "JetBrains idea 2024.2.4",
                            "xun": "https://pan.xunlei.com/s/VOBEiswnJmT1KzKJUHbcrMueA1?pwd=psfp#",
                            "uc": "https://pan.quark.cn/s/7694ceca1d5c",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains goland",
                        "icon": "static/img/icons/goland.svg",
                        "nav": [{
                            "name": "JetBrains goland 2024.2.3",
                            "xun": "https://pan.xunlei.com/s/VOBEj4p0ha3eJfkKcY0nOPrDA1?pwd=tucy#",
                            "uc": "https://pan.quark.cn/s/1701953bfd35",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains CLion",
                        "icon": "static/img/icons/CLion.svg",
                        "nav": [{
                            "name": "JetBrains CLion 2024.2.3",
                            "xun": "https://pan.xunlei.com/s/VOBEjOk-ha3eJfkKcY0nOYBNA1?pwd=4j3x#",
                            "uc": "https://pan.quark.cn/s/f966cf9f119a",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains WebStorm",
                        "icon": "static/img/icons/WebStorm.svg",
                        "nav": [{
                            "name": "JetBrains WebStorm 2024.2.4",
                            "xun": "https://pan.xunlei.com/s/VOBEjagHQIKzBusEFpRqeQYgA1?pwd=ymjg#",
                            "uc": "https://pan.quark.cn/s/4e5646859a6a",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }, {
                        "title": "JetBrains PhpStorm",
                        "icon": "static/img/icons/PhpStorm.svg",
                        "nav": [{
                            "name": "JetBrains PhpStorm 2024.2.4",
                            "xun": "https://pan.xunlei.com/s/VOBEjsXyfeNz0_9U_OlNmagHA1?pwd=dbds#",
                            "uc": "https://pan.quark.cn/s/f8f3b570f937",
                            "jc": "https://x.xu5.cc/post/490.html"
                        }]
                    }]
                }],
                search: {
                    in: "",
                    res: []
                },
                modalVisible: false,
                modalTitle: '',
                modalType: '',
                modalUrl: '',
                modalInput: '',
                passwords: {
                    jc: "520520",
                    wenti: "520520"
                }
            };
        },
        methods: {
            debouncedSearch: _.debounce(function(value) {
                this.searching(value);
            }, 500),
            searching(value) {
                const regex = new RegExp(value.split('').map(char=>`.*${char}.*`).join(''),'i');
                this.search.res = this.db.flatMap(tab=>tab.list.flatMap(item=>item.nav.filter(nav=>regex.test(nav.name))));
            },
            go(url) {
                window.open(url, '_blank');
            },
            openModal(title, type, url) {
                this.modalTitle = `请输入密码访问 ${title}`;
                this.modalType = type;
                this.modalUrl = url;
                this.modalInput = '';
                this.modalVisible = true;
            },
            closeModal() {
                this.modalVisible = false;
            },
            verifyAccess() {
                if (this.modalInput === this.passwords[this.modalType]) {
                    window.open(this.modalUrl, '_blank');
                    this.modalVisible = false;
                } else {
                    alert('密码错误，请重试！');
                }
            }
        }
    });
});
