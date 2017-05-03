var color1 = '#d20962';
var color2 = '#f47721';
var color3 = '#7ac143';
var color4 = '#00a78e';
var color5 = '#00bce4';
var bathroomColor = "#A79FC8";

var plans = [

    { // 1
        plan: [
            { // top
                rooms  : [ '102','103','104','105','106' ],
                color  : [ color1, color1, color4, color4, color1 ],
                backNum: [ '102','103','104','105','106' ]
            },
            { // left
                rooms  : [ '101','','','','','' ],
                color  : [ color5, color2, color2, color2, color2, color2 ],
                backNum: [ '101','','','','','' ]
            },
            { // right
                rooms  : [ '107','','108','109','更衣间','' ],
                color  : [ color3, color3, color1, color4, color1, color1 ],
                backNum: [ '107','107','108','109','更衣间','' ]
            },
            { // bottom
                rooms  : [ '前台','','大厅','过道','' ],
                color  : [ color1, color5, color5, color5, color5 ],
                backNum: [ '前台','','大厅','过道','' ]
            },
        ]
    },
    { // 2
        plan: [
            { // top
                rooms  : [ '卫生间','202','203','204','205' ],
                color  : [ bathroomColor, color1, color1, color2, color3 ],
                backNum: [ '卫生间','202','203','204','205' ]
            },
            { // left
                rooms  : [ '201','','','','','' ],
                color  : [ color2, color1, color1, color1, color1, color1 ],
                backNum: [ '201','','','','','' ]
            },
            { // right
                rooms  : [ '206','','','','','' ],
                color  : [ color1, color4, color4, color4, color4, color4 ],
                backNum: [ '206','','','','','' ]
            },
            { // bottom
                rooms  : [ '','二楼','','大厅','' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '','二楼','','大厅','' ]
            },
        ]
    },
    { // 3
        plan: [
            { // top
                rooms  : [ '卫生间','308','309','','310' ],
                color  : [ bathroomColor, color1, color2, color2, color2 ],
                backNum: [ '卫生间','308','309','','310' ]
            },
            { // left
                rooms  : [ '307','','306','','305','' ],
                color  : [ color2, color2, color1, color1, color4, color4 ],
                backNum: [ '307','307','306','306','305','305' ]
            },
            { // right
                rooms  : [ '','会','议','前','厅','' ],
                color  : [ color5, color5, color5, color5, color5, color5 ],
                backNum  : [ '','会','议','前','厅','' ]
            },
            { // bottom
                rooms  : [ '304','303','','301','302' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '304','303','','301','302' ]
            },
        ]
    },
    { // 4
        plan: [
            { // top
                rooms  : [ '卫生间','','','','' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '','','','','' ]
            },
            { // left
                rooms  : [ '备用','','备用','','更衣间','' ],
                color  : [ color2, color2, color1, color1, color4, color4 ],
                backNum: [ '','','','','','' ]
            },
            { // right
                rooms  : [ '','','','','','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum  : [ '','','','','','' ]
            },
            { // bottom
                rooms  : [ '','信息','技术','中心','' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '','','','','' ]
            },
        ]
    },
    { // 5
        plan: [
            { // top
                rooms  : [ '卫生间','505','','506','' ],
                color  : [ bathroomColor, color1, color1, color2, color2 ],
                backNum: [ '卫生间','505','505','506','506' ]
            },
            { // left
                rooms  : [ '调阅室','504','','','','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '504','504','','','','' ]
            },
            { // right
                rooms  : [ '507','机','房','监','控','洽谈室' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '507','507','507','507','507','洽谈室' ]
            },
            { // bottom
                rooms  : [ '','','信息','技术','部' ],
                color  : [ color2, color4, color4, color4, color4 ],
                backNum: [ '504','','信息','技术','部' ]
            },
        ]
    },
    { // 6
        plan: [
            { // top
                rooms  : [ '卫生间','','餐','厅','' ],
                color  : [ bathroomColor, color5, color5, color5, color5 ],
                backNum: [ '卫生间','','餐','厅','' ]
            },
            { // left
                rooms  : [ '休息室','607','办公室','606','服务室','605' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '607','607','606','606','605','605' ]
            },
            { // right
                rooms  : [ '','','','','','' ],
                color  : [ color5, color5, color5, color5, color5, color5 ],
                backNum: [ '','','','','','' ]
            },
            { // bottom
                rooms  : [ '604','603','602','601','' ],
                color  : [ color5, color5, color5, color5, color5 ],
                backNum: [ '604','603','602','601','' ]
            },
        ]
    },
    { // 7
        plan: [
            { // top
                rooms  : [ '卫生间','706','707','708','709' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','706','707','708','709' ]
            },
            { // left
                rooms  : [ '705','','704','','703','' ],
                color  : [ color3, color3, color3, color3, color3, color3 ],
                backNum: [ '705','705','704','704','703','703' ]
            },
            { // right
                rooms  : [ '710','711','','712','','' ],
                color  : [ color2, color2, color2, color2, color2, color5 ],
                backNum: [ '710','711','711','712','712','701' ]
            },
            { // bottom
                rooms  : [ '','702','','701','' ],
                color  : [ color4, color4, color4, color5, color5 ],
                backNum: [ '702','702','702','701','701' ]
            },
        ]
    },
    { // 8
        plan: [
            { // top
                rooms  : [ '卫生间','804','','805','806' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','804','804','805','806' ]
            },
            { // left
                rooms  : [ '','','803','车队','','' ],
                color  : [ color3, color3, color3, color3, color3, color3 ],
                backNum  : [ '','','803','803','','' ]
            },
            { // right
                rooms  : [ '807','','','808','','' ],
                color  : [ color2, color2, color2, color2, color2, color5 ],
                backNum: [ '807','807','807','808','808','808' ]
            },
            { // bottom
                rooms  : [ '802','','行政','管理','801' ],
                color  : [ color5, color5, color5, color5, color5 ],
                backNum: [ '802','802','802','801','801' ]
            },
        ]
    },
    { // 9
        plan: [
            { // top
                rooms  : [ '卫生间','905','','906','907' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','905','905','906','907' ]
            },
            { // left
                rooms  : [ '','904','','903','','' ],
                color  : [ color2, color2, color2, color2, color2, color5 ],
                backNum: [ '904','904','904','903','903','902' ]
            },
            { // right
                rooms  : [ '','908','','909','','' ],
                color  : [ color2, color2, color2, color2, color2, color5 ],
                backNum: [ '908','908','908','909','909','901' ]
            },
            { // bottom
                rooms  : [ '','902','','901','' ],
                color  : [ color5, color5, color5, color5, color5 ],
                backNum: [ '902','902','902','901','901' ]
            },
        ]
    },
    { // 10
        plan: [
            { // top
                rooms  : [ '卫生间','1007','','1008','' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','1007','1007','1008','1008' ]
            },
            { // left
                rooms  : [ '1006','','1005','','1004','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '1006','1006','1005','1005','1004','1004' ]
            },
            { // right
                rooms  : [ '1009','1010','1010','1011','1012','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '1009','1010','1010','1011','1012','1012' ]
            },
            { // bottom
                rooms  : [ '1003','','1002','1001','' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '1003','1003','1002','1001','1001' ]
            },
        ]
    },
    { // 11
        plan: [
            { // top
                rooms  : [ '卫生间','1105','','1106','' ],
                color  : [ bathroomColor, color2, color2, color3, color3 ],
                backNum: [ '卫生间','1105','1105','1106','1106' ]
            },
            { // left
                rooms  : [ '1104','视频','会议室','1103','演播室','' ],
                color  : [ color2, color2, color2, color2, color2, color5 ],
                backNum: [ '1104','1104','1104','1103','1103','1102' ]
            },
            { // right
                rooms  : [ '','','','1107','','1108' ],
                color  : [ color3, color3, color3, color3, color3, color5 ],
                backNum: [ '','','1107','1107','1107','1108' ]
            },
            { // bottom
                rooms  : [ '研究','中心','1102','1101','' ],
                color  : [ color5, color5, color5, color5, color5 ],
                backNum: [ '1102','1102','1102','1101','1101' ]
            },
        ]
    },
    { // 12
        plan: [
            { // top
                rooms  : [ '卫生间','1205','','1206','' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','1205','1205','1206','1206' ]
            },
            { // left
                rooms  : [ '','1204','','','1203','' ],
                color  : [ color3, color3, color3, color3, color3, color3 ],
                backNum: [ '1204','1204','1204','1203','1203','1203' ]
            },
            { // right
                rooms  : [ '1207','会议室','','1208','','' ],
                color  : [ color3, color3, color3, color3, color3, color3 ],
                backNum: [ '1207','1207','1207','1208','1208','1208' ]
            },
            { // bottom
                rooms  : [ '','1202','','1201','' ],
                color  : [ color4, color4, color4, color4, color4 ],
                backNum  : [ '1202','1202','1202','1201','1201' ]
            },
        ]
    },
    { // 13
        plan: [
            { // top
                rooms  : [ '卫生间','备用','1306','1307','' ],
                color  : [ bathroomColor, color2, color2, color3, color3 ],
                backNum: [ '卫生间','1306','1306','1307','1307' ]
            },
            { // left
                rooms  : [ '','1305','','档案室','','' ],
                color  : [ color4, color4, color4, color5, color5, color5 ],
                backNum: [ '1305','1305','1305','档案室','','' ]
            },
            { // right
                rooms  : [ '','1308','备用','','','' ],
                color  : [ color2, color2, color2, color3, color3, color3 ],
                backNum: [ '1308','1308','备用','','','' ]
            },
            { // bottom
                rooms  : [ '1304','1303','1302','1301','' ],
                color  : [ color5, color5, color3, color3, color3 ],
                backNum: [ '1304','1303','1302','1301','1301' ]
            },
        ]
    },
    { // 14
        plan: [
            { // top
                rooms  : [ '卫生间','1407','1408','1409','' ],
                color  : [ bathroomColor, color1, color2, color2, color2 ],
                backNum: [ '卫生间','1407','1408','1409','1409' ]
            },
            { // left
                rooms  : [ '','1406','','','1405','' ],
                color  : [ color4, color4, color4, color3, color3, color3 ],
                backNum: [ '1406','1406','1406','1405','1405','1405' ]
            },
            { // right
                rooms  : [ '','1410','','','1411','' ],
                color  : [ color1, color1, color1, color4, color4, color4 ],
                backNum: [ '1410','1410','1410','1411','1411','1411' ]
            },
            { // bottom
                rooms  : [ '1404','1403','1402','1401','' ],
                color  : [ color3, color3, color5, color5, color5 ],
                backNum: [ '1404','1403','1402','1401','' ]
            },
        ]
    },
    { // 15
        plan: [
            { // top
                rooms  : [ '卫生间','1508','','1509','' ],
                color  : [ bathroomColor, color1, color2, color2, color2 ],
                backNum: [ '卫生间','1508','1509','1509','1509' ]
            },
            { // left
                rooms  : [ '','1507','1506','备用','1505','' ],
                color  : [ color3, color3, color4, color4, color4, color4 ],
                backNum: [ '1507','1507','1506','1506','1505','1504' ]
            },
            { // right
                rooms  : [ '','','','','1510','' ],
                color  : [ color2, color2, color2, color3, color3, color3 ],
                backNum: [ '','','','1510','1510','1510' ]
            },
            { // bottom
                rooms  : [ '1504','1503','1502','1501','' ],
                color  : [ color4, color4, color5, color5, color5 ],
                backNum: [ '1504','1503','1502','1501','' ]
            },
        ]
    },
    { // 16
        plan: [
            { // top
                rooms  : [ '卫生间','1608','人力','资源部','1609' ],
                color  : [ bathroomColor, color2, color2, color2, color2 ],
                backNum: [ '卫生间','1608','1608','1609','1609' ]
            },
            { // left
                rooms  : [ '1607','备用','1606','机构','管理部','1605' ],
                color  : [ color3, color3, color3, color3, color3, color5 ],
                backNum: [ '1607','1607','1606','1606','1606','1605' ]
            },
            { // right
                rooms  : [ '财务','档案','1610','','','' ],
                color  : [ color1, color1, color1, color4, color4, color4 ],
                backNum: [ '1610','1610','1610','','','' ]
            },
            { // bottom
                rooms  : [ '1604','1603','1602','1601','' ],
                color  : [ color5, color5, color4, color4, color4 ],
                backNum: [ '1604','1603','1602','1601','1601' ]
            },
        ]
    },
    { // 17
        plan: [
            { // top
                rooms  : [ '卫生间','1707','1708','1709','会议室' ],
                color  : [ bathroomColor, color1, color2, color3, color3 ],
                backNum: [ '卫生间','1707','1708','1709','1709' ]
            },
            { // left
                rooms  : [ '5号','会议室','1706','1705','','1704' ],
                color  : [ color3, color3, color3, color4, color4, color2 ],
                backNum: [ '1706','1706','1706','1705','','1704' ]
            },
            { // right
                rooms  : [ '1710','服务间','7号','会议室','1711','1701-1' ],
                color  : [ color3, color3, color3, color3, color3, color1 ],
                backNum  : [ '1710','1710','1711','1711','1711','1701' ]
            },
            { // bottom
                rooms  : [ '1704','1703','1702','1701','董事会' ],
                color  : [ color2, color3, color3, color5, color5 ],
                backNum: [ '1704','1703','1702','1701','1701' ]
            },
        ]
    },
    { // 18
        plan: [
            { // top
                rooms  : [ '卫生间','1808','1809','1810','总裁办公室' ],
                color  : [ bathroomColor, color1, color2, color3, color4 ],
                backNum: [ '卫生间','1808','1809','1810','' ]
            },
            { // left
                rooms  : [ '总会计师','1807','','副总裁','1806','' ],
                color  : [ color4, color4, color4, color1, color1, color1 ],
                backNum: [ '1807','1807','1807','1806','1806','1806' ]
            },
            { // right
                rooms  : [ '','总裁','1811','','副总裁','1812' ],
                color  : [ color1, color1, color1, color1, color1, color1 ],
                backNum: [ '1811','1811','1811','1812','1812','1812' ]
            },
            { // bottom
                rooms  : [ '1805','1804','1803','1802','1801' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '1805','1804','1803','1802','1801' ]
            },
        ]
    },
    { // 19
        plan: [
            { // top
                rooms  : [ '卫生间','1908','1909','1910','董事长' ],
                color  : [ bathroomColor, color1, color2, color3, color3 ],
                backNum: [ '卫生间','1908','1909','1910','董事长' ]
            },
            { // left
                rooms  : [ '1907','','','1906','副总裁','' ],
                color  : [ color3, color3, color3, color5, color5, color5 ],
                backNum: [ '1907','1907','1907','1906','1906','1906' ]
            },
            { // right
                rooms  : [ '1911','监事会','主席','1912','工会','主席' ],
                color  : [ color1, color1, color1, color4, color4, color4 ],
                backNum: [ '1911','1911','1911','1912','1912','1912' ]
            },
            { // bottom
                rooms  : [ '1905','1904','1903','1902','1901' ],
                color  : [ color5, color5, color4, color4, color2 ],
                backNum: [ '1905','1904','1903','1902','1901' ]
            },
        ]
    },
    { // 20
        plan: [
            { // top
                rooms  : [ '','国元','','集团','' ],
                // rooms  : [ '','','国元集团','','' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '','','','','' ]
            },
            { // left
                rooms  : [ '','国','元','集','团','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '','','','','','' ]
            },
            { // right
                rooms  : [ '','国','元','集','团','' ],
                color  : [ color2, color2, color2, color2, color2, color2 ],
                backNum: [ '','','','','','' ]
            },
            { // bottom
                rooms  : [ '','国元','','集团','' ],
                color  : [ color2, color2, color2, color2, color2 ],
                backNum: [ '','','','','' ]
            },
        ]
    },




];

