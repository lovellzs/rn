﻿/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    View,
    } from 'react-native';

//var MOCKED_MOVIES_DATA = [
//    {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
//];






class HomeUI extends Component{

    constructor(props) {
        super(props);//这一句不能省略，照抄即可

        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };


        this.state = {
            loaded:false,
            dataSource:new ListView.DataSource({
                getSectionData          : getSectionData,
                getRowData              : getRowData,
                rowHasChanged:(row1,row2)=> row1 !== row2,
                sectionHeaderHasChanged : (s1, s2) => s1 !== s2

            }),
        };
    }



    render(){
        if (!this.state.loaded) {

            return this.renderLoadingView();
        }

        //从网络上获取了数据的情况
        //var movie = this.state.movies[0];
        //return this.renderMovie(movie);

        return(

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>User List</Text>
                </View>

                <ListView
                    dataSource = {this.state.dataSource}
                    style      = {styles.listview}
                    renderRow  = {this.renderRow}
                    renderSectionHeader = {this.renderSectionHeader}
                    />

            </View>


        );

    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text style={styles.text}>片头-公司名:{sectionData}</Text>
            </View>
        );
    }

    renderRow (rowData, sectionID, rowID) {
    return (

            <View style={styles.rowStyle}>
                <Text style={styles.rowText}>{rowData.name.title} {rowData.name.first} {rowData.name.last}-{sectionID}-{rowID}</Text>
            </View>

    );
}


    renderLoadingView() {
        return (
            <View style={styles.loadingpage}>
                <Text>
                    正在网络上获取电影数据……
                </Text>
            </View>
        );
    }


    componentDidMount() {
        //this.fetchData();

        this.fetchData2();
    }

    fetchData2 () {
        var responseData={
            "results" : [
                {
                    "organization":"马云的淘宝",
                    "id" : 12348124,
                    "users" : [{"user":{"gender":"female","name":{"title":"miss","first":"marga","last":"seegers"},"location":{"street":"9234 kintgenshaven","city":"epe","state":"groningen","zip":"24360"},"email":"marga.seegers25@example.com","username":"orangeleopard377","password":"427900","salt":"KrIEhHan","md5":"589a574553250be33f3b1170624ad2d1","sha1":"b95ebe39ae6119c5d578938b2d0be8abf674d22c","sha256":"591584f0bcd6ab1700b59f7bad4ef84917d9ad1270a5a3f4fdd0519fd6d6f37e","registered":"1412818529","dob":"368162464","phone":"(468)-937-2959","cell":"(971)-550-2808","BSN":"95632864","picture":{"large":"http://api.randomuser.me/portraits/women/35.jpg","medium":"http://api.randomuser.me/portraits/med/women/35.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/35.jpg"},"version":"0.6","nationality":"NL"},"seed":"0e4de8b1953a999b06"},{"user":{"gender":"female","name":{"title":"ms","first":"kristianne","last":"van den oetelaar"},"location":{"street":"4802 donkerstraat","city":"sint-michielsgestel","state":"groningen","zip":"61965"},"email":"kristianne.van den oetelaar12@example.com","username":"ticklishmeercat405","password":"dolores","salt":"KwAVXd3o","md5":"5cbc80332e3523dd9d90cc116daf9d8e","sha1":"4d3c0dd6123eee0dfd4d2f1fd02d204cdbc66ea3","sha256":"237dd75ac4edf8655fc1df2ecdcbb9fc8bda6f13874274321d5f016422bd845e","registered":"975686912","dob":"1213287452","phone":"(544)-595-2864","cell":"(332)-676-7259","BSN":"10118205","picture":{"large":"http://api.randomuser.me/portraits/women/21.jpg","medium":"http://api.randomuser.me/portraits/med/women/21.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/21.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"female","name":{"title":"ms","first":"livia","last":"stout"},"location":{"street":"4913 hanengeschrei","city":"bellingwedde","state":"noord-holland","zip":"16963"},"email":"livia.stout85@example.com","username":"smallgoose733","password":"lotus","salt":"aY8HrNYd","md5":"7d8c37997f09c122794651b1ec841491","sha1":"85e48eae90f24263c213d0d40a5bdc44b082e6de","sha256":"75d814449715a173c01df5c77a37ec644c5fcc195d390fe3d6a1dc5170a3c671","registered":"1129407252","dob":"708057390","phone":"(932)-320-9543","cell":"(161)-271-2230","BSN":"56110925","picture":{"large":"http://api.randomuser.me/portraits/women/68.jpg","medium":"http://api.randomuser.me/portraits/med/women/68.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/68.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"female","name":{"title":"miss","first":"dian","last":"grinwis"},"location":{"street":"8484 vismarkt","city":"oirschot","state":"flevoland","zip":"57731"},"email":"dian.grinwis32@example.com","username":"redduck583","password":"slammer","salt":"RlM7lRMv","md5":"3956e950cbbf896533aef74c2c82cd89","sha1":"f75a3a91443900b4d00caae529242bae7619dc67","sha256":"6bd83fd97fe9eb451778af5640def605d944ad9868c0c5f3a0afe7f265967975","registered":"1273461100","dob":"457808604","phone":"(693)-305-1652","cell":"(948)-380-2046","BSN":"21298918","picture":{"large":"http://api.randomuser.me/portraits/women/59.jpg","medium":"http://api.randomuser.me/portraits/med/women/59.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/59.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"female","name":{"title":"miss","first":"sky","last":"van der kemp"},"location":{"street":"9082 hanengeschrei","city":"woerden","state":"noord-brabant","zip":"87830"},"email":"sky.van der kemp89@example.com","username":"beautifullion820","password":"jameson","salt":"gpRYYHWG","md5":"8d3c0c7c2338280d383815eeb93509f6","sha1":"aba28553b806a84b5c93cb07b15a5eea6ad3dced","sha256":"bd37728ef45db8e5e2309883da62c85b6d66c555585f915007f4540b8baf73a2","registered":"1050510726","dob":"901473870","phone":"(164)-819-7581","cell":"(839)-758-4768","BSN":"97799112","picture":{"large":"http://api.randomuser.me/portraits/women/10.jpg","medium":"http://api.randomuser.me/portraits/med/women/10.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/10.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"male","name":{"title":"mr","first":"davi","last":"van de kerkhof"},"location":{"street":"4627 a.b.c.-straat","city":"baarn","state":"zeeland","zip":"85733"},"email":"davi.van de kerkhof88@example.com","username":"tinyfish856","password":"mack","salt":"hDCD5UCo","md5":"c84ceab40f165ace6d8e91232a6905ce","sha1":"902f7e0e61e582382b878e6fc52dbe54a8ca6824","sha256":"f80e5324f69e59171190f38640d811e1b297bf6fa6010b4f051962521b645b9d","registered":"1309871004","dob":"94515551","phone":"(859)-733-3132","cell":"(772)-233-1220","BSN":"51713289","picture":{"large":"http://api.randomuser.me/portraits/men/72.jpg","medium":"http://api.randomuser.me/portraits/med/men/72.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/72.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"male","name":{"title":"mr","first":"jurren","last":"van kempen"},"location":{"street":"1819 jaarbeursplein","city":"vaals","state":"limburg","zip":"56510"},"email":"jurren.van kempen58@example.com","username":"redswan440","password":"toast","salt":"5XSwgdfp","md5":"c56b46820b77e86cbfb7aaa519e9c4dc","sha1":"7ddb6f993a0f236ff2d26fa8f52a798f349b3159","sha256":"4f91b03c1743131041fd7042a8cff99ffa81d89ae8c8d844fe0d929630085d1a","registered":"1305494756","dob":"855455812","phone":"(255)-620-7074","cell":"(685)-725-7731","BSN":"03063241","picture":{"large":"http://api.randomuser.me/portraits/men/30.jpg","medium":"http://api.randomuser.me/portraits/med/men/30.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/30.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"male","name":{"title":"mr","first":"alfons","last":"op den kamp"},"location":{"street":"8882 lucasbolwerk","city":"woerden","state":"overijssel","zip":"57194"},"email":"alfons.op den kamp22@example.com","username":"whitewolf73","password":"gizmodo1","salt":"NAs8S1vd","md5":"8ad86f9082ffc5d59d97ad65da740b76","sha1":"8020e8425903b989917e98b158430f2c840483f2","sha256":"6c3e423a0c430a4ba9055b8978ce11ffcf5b1eb8b480de4eb5e42edfcc57c6e9","registered":"1265083639","dob":"842860770","phone":"(309)-450-2092","cell":"(444)-938-2465","BSN":"79901367","picture":{"large":"http://api.randomuser.me/portraits/men/17.jpg","medium":"http://api.randomuser.me/portraits/med/men/17.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/17.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"male","name":{"title":"mr","first":"oene","last":"stroo"},"location":{"street":"5144 kanaalstraat","city":"stitswerd","state":"noord-holland","zip":"83564"},"email":"oene.stroo78@example.com","username":"beautifulduck365","password":"kids","salt":"5tiB9dsf","md5":"e756d75093bb3a65e5a6561eb04e11a1","sha1":"5e0bde9e6ec281baa8f30a6397e49eb1e60bc48b","sha256":"4a8d1f362c4f363c03fb8d582b0fa1023eb9c0649aa8c0b4bcfe1bf963bc3688","registered":"919404649","dob":"1371322133","phone":"(814)-506-8471","cell":"(612)-677-3623","BSN":"00221743","picture":{"large":"http://api.randomuser.me/portraits/men/91.jpg","medium":"http://api.randomuser.me/portraits/med/men/91.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/91.jpg"},"version":"0.6","nationality":"NL"}},{"user":{"gender":"male","name":{"title":"mr","first":"yanick","last":"van leuveren"},"location":{"street":"2184 dorstige hartsteeg","city":"alphen aan den rijn","state":"zuid-holland","zip":"27375"},"email":"yanick.van leuveren88@example.com","username":"blackgoose35","password":"moneys","salt":"HbNeVqXl","md5":"dbcdaf6a92e48e2dd0b87053a6c0a460","sha1":"791054281820a850e6b23acd05bd8a0d959bd8c2","sha256":"691fd48fc1194df987b0840548c4d99b6d763f73a10269f16deb3c9905581af9","registered":"1082860214","dob":"676524370","phone":"(866)-815-8130","cell":"(936)-599-6632","BSN":"05350614","picture":{"large":"http://api.randomuser.me/portraits/men/57.jpg","medium":"http://api.randomuser.me/portraits/med/men/57.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/57.jpg"},"version":"0.6","nationality":"NL"}}]
                },
                {
                    "organization" : "马化腾的腾讯",
                    "id" : 1235513,
                    "users" : [{"user":{"gender":"female","name":{"title":"miss","first":"nicole","last":"sullivan"},"location":{"street":"4460 dame street","county":"westmeath","state":"nebraska","zip":"65675"},"email":"nicole.sullivan32@example.com","username":"whitemeercat565","password":"emilia","salt":"4iMLu9PN","md5":"9bc08bb89d4b7163734e5a82bc1c913f","sha1":"9de75c7d5e69bfc5ee6f983ee1e14389a4872fc1","sha256":"edbac3b6a89cbca7682e39d196cc98250ebd08c562e39bfc421ce6df00779591","registered":"1182085459","dob":"1168428275","phone":"061-325-8502","cell":"081-708-1316","PPS":"9813310T","picture":{"large":"http://api.randomuser.me/portraits/women/69.jpg","medium":"http://api.randomuser.me/portraits/med/women/69.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/69.jpg"},"version":"0.6","nationality":"IE"},"seed":"5619bbd757e136f605"},{"user":{"gender":"male","name":{"title":"mr","first":"danny","last":"ellis"},"location":{"street":"2169 boghall road","county":"westmeath","state":"tennessee","zip":"72993"},"email":"danny.ellis12@example.com","username":"crazyrabbit306","password":"ventura","salt":"tY0lih6e","md5":"5084736a5dc54b3d01ab466cbe5a2bfd","sha1":"f31399120c1ab554dda8ace456f0f6f54495b2ff","sha256":"664a71760320c435aed0ce56a909bbc13de5df8ed125919a037b5b51c6cc8f4c","registered":"1303936975","dob":"364285980","phone":"011-837-5946","cell":"081-100-8075","PPS":"8688583T","picture":{"large":"http://api.randomuser.me/portraits/men/54.jpg","medium":"http://api.randomuser.me/portraits/med/men/54.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/54.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"richard","last":"morgan"},"location":{"street":"5035 alexander road","county":"kilkenny","state":"delaware","zip":"69490"},"email":"richard.morgan89@example.com","username":"silverduck542","password":"traveler","salt":"sxORSoY9","md5":"5cf586edf1c296d439fc8c760ce0da78","sha1":"1f6fca26a6872c40d7c582630f04bff62ccf13e4","sha256":"1c1c49b3fc8638a1367ce62c6adf8e2512160124e5b1464e44ee881498935dae","registered":"919104389","dob":"1084866539","phone":"061-221-6482","cell":"081-655-1626","PPS":"9449807T","picture":{"large":"http://api.randomuser.me/portraits/men/97.jpg","medium":"http://api.randomuser.me/portraits/med/men/97.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/97.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"adrian","last":"davies"},"location":{"street":"4647 springfield road","county":"wicklow","state":"louisiana","zip":"33162"},"email":"adrian.davies92@example.com","username":"yellowswan639","password":"lucas1","salt":"LdrwNPBi","md5":"17ae93548bf33c9fa6765339802eb9f7","sha1":"8603687eac12f0656a054442e85486a7ce1838be","sha256":"c31ec960710e9cc2fdb7b8b5efc08c046c5e792bf4186b5f1165c0b7b6017fd8","registered":"962118192","dob":"26815780","phone":"041-659-1652","cell":"081-604-9024","PPS":"6300798T","picture":{"large":"http://api.randomuser.me/portraits/men/23.jpg","medium":"http://api.randomuser.me/portraits/med/men/23.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/23.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"charlie","last":"snyder"},"location":{"street":"2432 rookery road","county":"mayo","state":"utah","zip":"37785"},"email":"charlie.snyder16@example.com","username":"crazysnake158","password":"madrid","salt":"yGk3jsla","md5":"62bfb188b82a370c81d70c41b08f44fa","sha1":"55fb0f5f919367773b4311d60158e0155712c76e","sha256":"e4e5b13aef4cb0767bf000e51ee5ee81b229b917282cc632cc60ba0e4443428c","registered":"1188946120","dob":"854921262","phone":"051-414-5629","cell":"081-733-0879","PPS":"7060395T","picture":{"large":"http://api.randomuser.me/portraits/men/96.jpg","medium":"http://api.randomuser.me/portraits/med/men/96.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/96.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"donald","last":"fitzpatrick"},"location":{"street":"9052 mill lane","county":"louth","state":"delaware","zip":"94374"},"email":"donald.fitzpatrick20@example.com","username":"blueladybug188","password":"ultima","salt":"OfYY5b2o","md5":"9ee42fe6081031aa5d798a1afcfeee19","sha1":"bb0a7385f321bf07b935188ce671bd0d1546d3c8","sha256":"4fc094e01b78d0346549779c0b71648bf7b06e01d2431c13ae7fcf154e3e3e88","registered":"1326909704","dob":"317684299","phone":"071-542-5600","cell":"081-226-4018","PPS":"8748263T","picture":{"large":"http://api.randomuser.me/portraits/men/78.jpg","medium":"http://api.randomuser.me/portraits/med/men/78.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/78.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"adrian","last":"hawkins"},"location":{"street":"4294 highfield road","county":"kerry","state":"new mexico","zip":"89723"},"email":"adrian.hawkins20@example.com","username":"greenbutterfly955","password":"lithium","salt":"BDpOCi72","md5":"f466f40834aa260d6ab86bee912fc443","sha1":"4471b33b51ea7bfad7576f6b259d1afb475e93db","sha256":"115894fc233340373c8d685486ed742e676c9742fefbe2639b74c5f2db963873","registered":"1023499340","dob":"1123203166","phone":"021-701-3515","cell":"081-472-4664","PPS":"7895070T","picture":{"large":"http://api.randomuser.me/portraits/men/80.jpg","medium":"http://api.randomuser.me/portraits/med/men/80.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/80.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"ms","first":"caitlin","last":"robertson"},"location":{"street":"7233 park road","county":"kilkenny","state":"new york","zip":"58270"},"email":"caitlin.robertson81@example.com","username":"purplerabbit906","password":"fabian","salt":"Xg7lsGyi","md5":"10eaa195e29753ca6686755fceddef53","sha1":"0911abd4c4422db83da060b14b8cd6912f468495","sha256":"3bfdb51f2670d1ae6cb1dd5b2563d4b10ca42aaf614eec6b1a4484d2dd904617","registered":"1272318905","dob":"791612358","phone":"071-764-2041","cell":"081-114-9875","PPS":"0645200T","picture":{"large":"http://api.randomuser.me/portraits/women/49.jpg","medium":"http://api.randomuser.me/portraits/med/women/49.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/49.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"miss","first":"grace","last":"johnston"},"location":{"street":"6826 green lane","county":"galway","state":"minnesota","zip":"47758"},"email":"grace.johnston99@example.com","username":"crazypanda878","password":"dutch","salt":"gDGBbCyY","md5":"d91f66fe034218a2975ebd7db4738a12","sha1":"4df7918a91baf463e9b7e882fff0a70f9cae27f7","sha256":"ee55cb982b93a9a5c472b3632657e581d581c84e4ff8b2fe74004e965b0e5534","registered":"1195137230","dob":"655630404","phone":"021-808-7639","cell":"081-330-9635","PPS":"4498197T","picture":{"large":"http://api.randomuser.me/portraits/women/28.jpg","medium":"http://api.randomuser.me/portraits/med/women/28.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/28.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"mrs","first":"rosie","last":"douglas"},"location":{"street":"5834 victoria road","county":"kilkenny","state":"arizona","zip":"44906"},"email":"rosie.douglas24@example.com","username":"redelephant112","password":"pissed","salt":"IHwMrGvi","md5":"648b75b00311daa164439d898be76cf1","sha1":"671f6f5c2da4be03e51daea97a7550a49a231f58","sha256":"89f7406abf60617b3b0b620787f3d85f53ef21f0a2bab9f9f77813429ec9644a","registered":"1334726180","dob":"689823354","phone":"061-117-1724","cell":"081-737-5541","PPS":"1120371T","picture":{"large":"http://api.randomuser.me/portraits/women/13.jpg","medium":"http://api.randomuser.me/portraits/med/women/13.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/13.jpg"},"version":"0.6","nationality":"IE"}}]
                },
                {
                    "organization" : "李彦宏的百度",
                    "id" : 1237141,
                    "users" : [{"user":{"gender":"female","name":{"title":"miss","first":"joyce","last":"little"},"location":{"street":"2086 wheeler ridge dr","city":"saginaw","state":"hawaii","zip":"60560"},"email":"joyce.little62@example.com","username":"bigbutterfly528","password":"suan","salt":"fIfM75bl","md5":"5b3318e717934073039028c9e5125896","sha1":"49bb487743a1c03d8fcb8e4d1878a4c7ca8daff3","sha256":"570824d2765a04ec0d36c3733caf3a6e8a73869fb46463bce59b42ada06a38e4","registered":"978399204","dob":"762101147","phone":"(966)-213-8700","cell":"(713)-205-8948","SSN":"472-85-8663","picture":{"large":"http://api.randomuser.me/portraits/women/73.jpg","medium":"http://api.randomuser.me/portraits/med/women/73.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/73.jpg"},"version":"0.6","nationality":"US"},"seed":"ce7e3f33874c75ac07"},{"user":{"gender":"female","name":{"title":"mrs","first":"ann","last":"gonzales"},"location":{"street":"8013 eason rd","city":"green bay","state":"ohio","zip":"82621"},"email":"ann.gonzales78@example.com","username":"lazyswan780","password":"buster1","salt":"Qo4OwKpR","md5":"bc7a5338eb89da8b3044326277e7a9f1","sha1":"326a397498de1ef7ee05132aeb6206d4ff17a1a9","sha256":"ab21ff72f0aa133c39d82a712d664008ed87f33931721dde8eee1b41fe99e3e5","registered":"1270166840","dob":"282810942","phone":"(996)-235-1864","cell":"(394)-483-2485","SSN":"738-29-6683","picture":{"large":"http://api.randomuser.me/portraits/women/75.jpg","medium":"http://api.randomuser.me/portraits/med/women/75.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/75.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"ms","first":"genesis","last":"olson"},"location":{"street":"1862 bruce st","city":"fayetteville","state":"new mexico","zip":"85105"},"email":"genesis.olson92@example.com","username":"organicsnake698","password":"kelly1","salt":"93k9h13L","md5":"f296f1cdcf1a901fc0d819e87f9db287","sha1":"3198b8fcf52318d5efe0cd8b77b19250c64961a3","sha256":"33de662f7dbcabdb439ae0e2edeb47ecc0b24e6a6a91a48267b1a71a2e87d6ae","registered":"1430041672","dob":"1054041848","phone":"(175)-112-2839","cell":"(243)-447-2297","SSN":"274-55-2027","picture":{"large":"http://api.randomuser.me/portraits/women/51.jpg","medium":"http://api.randomuser.me/portraits/med/women/51.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/51.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"miss","first":"peyton","last":"simmmons"},"location":{"street":"9904 homestead rd","city":"albuquerque","state":"iowa","zip":"62580"},"email":"peyton.simmmons73@example.com","username":"organicrabbit844","password":"change","salt":"f0gFY6KT","md5":"9835af99ec882eb8f29a5620d12181d6","sha1":"99aedd274a6e5e127c565f0a13f5838acd4c5c07","sha256":"0822ee2a259d71f8a1cb84e290ca4d75eb2af1ffec69cc72b8e46aa9e791c5d6","registered":"1144450293","dob":"275323726","phone":"(350)-260-4248","cell":"(738)-528-1621","SSN":"231-83-6520","picture":{"large":"http://api.randomuser.me/portraits/women/22.jpg","medium":"http://api.randomuser.me/portraits/med/women/22.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/22.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"miss","first":"ruby","last":"palmer"},"location":{"street":"8796 crockett st","city":"aurora","state":"wisconsin","zip":"26266"},"email":"ruby.palmer60@example.com","username":"organicbutterfly558","password":"password","salt":"lEcGY4xC","md5":"752c778c0f0b6d68cd61b636c75d1ddd","sha1":"3d182fbcb725f5178f8a52372f7989f9ee40eee9","sha256":"e5be4319e50d7208eb8e5f813fa4c9566e2e2a5e078e4d9c82440723381025de","registered":"1036616387","dob":"734179936","phone":"(258)-181-9139","cell":"(396)-259-8782","SSN":"291-14-3517","picture":{"large":"http://api.randomuser.me/portraits/women/40.jpg","medium":"http://api.randomuser.me/portraits/med/women/40.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/40.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"miss","first":"robin","last":"perkins"},"location":{"street":"9001 brown terrace","city":"louisville","state":"texas","zip":"24874"},"email":"robin.perkins25@example.com","username":"crazylion493","password":"seth","salt":"Qez53XZr","md5":"343d690344f146b8b9b0fecd0470e8bc","sha1":"fbb6f4a9a5c2ab08784560461401747bf420681a","sha256":"52dfea4261c4389030c4d8d681c6878a119d56e7ba16bd5a19872ba7ef87ced3","registered":"1157078698","dob":"672848315","phone":"(825)-244-5953","cell":"(464)-502-6407","SSN":"599-65-7688","picture":{"large":"http://api.randomuser.me/portraits/women/81.jpg","medium":"http://api.randomuser.me/portraits/med/women/81.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/81.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"male","name":{"title":"mr","first":"steve","last":"dean"},"location":{"street":"3230 walnut hill ln","city":"newark","state":"georgia","zip":"91051"},"email":"steve.dean62@example.com","username":"bluegoose680","password":"leedsutd","salt":"kTsGknkT","md5":"353ec55e24648680ee30caeb32a8eb82","sha1":"2b84364d24e5de8276424317d1f7c7b3e24fe5ab","sha256":"bad86a891e42a9a9447769014e1ccd22e70c75d5ca6897e35266e21ba1bc1320","registered":"976089486","dob":"1106225963","phone":"(808)-314-9929","cell":"(854)-589-9408","SSN":"813-99-6841","picture":{"large":"http://api.randomuser.me/portraits/men/26.jpg","medium":"http://api.randomuser.me/portraits/med/men/26.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/26.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"male","name":{"title":"mr","first":"jessie","last":"barnett"},"location":{"street":"5902 frances ct","city":"oceanside","state":"louisiana","zip":"24622"},"email":"jessie.barnett76@example.com","username":"yellowdog415","password":"112358","salt":"huBLCiXm","md5":"8405ec6770a49f42fa00f94c2938d963","sha1":"cec52722803e47063d66873a2b2eba9b30c809a3","sha256":"ac2ee08d7a262813cf4dde9508d1d6ddaa2faeb8191fd81f3ed9f2e4d46032be","registered":"1240162359","dob":"853369384","phone":"(768)-686-8291","cell":"(837)-720-3846","SSN":"521-30-7428","picture":{"large":"http://api.randomuser.me/portraits/men/5.jpg","medium":"http://api.randomuser.me/portraits/med/men/5.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/5.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"ms","first":"ann","last":"berry"},"location":{"street":"9606 green rd","city":"lakewood","state":"new york","zip":"43400"},"email":"ann.berry26@example.com","username":"silverpanda270","password":"stress","salt":"ZPiHEor9","md5":"140c33a7c143de515466ae0d6ff08b3a","sha1":"c2707e0a649402e84a55959f5f9b6c28c9d9b5f9","sha256":"c73e97f7abf1a8e7a429efe767bcc68f2cd3a900a34b15724525b9c290cff1d3","registered":"1328864161","dob":"389974651","phone":"(165)-894-9554","cell":"(854)-162-3497","SSN":"729-21-3508","picture":{"large":"http://api.randomuser.me/portraits/women/77.jpg","medium":"http://api.randomuser.me/portraits/med/women/77.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/77.jpg"},"version":"0.6","nationality":"US"}},{"user":{"gender":"female","name":{"title":"miss","first":"hailey","last":"cunningham"},"location":{"street":"9533 e little york rd","city":"houston","state":"tennessee","zip":"36238"},"email":"hailey.cunningham87@example.com","username":"organicgorilla912","password":"ducks","salt":"EncA1Tp3","md5":"7b8d57609043dc4947d1a65993ae6833","sha1":"c293015adfa2b897524f2ff56cf55864b66d8c45","sha256":"32de293aeb56fbe00f9f460e8c4f287422adbb4c14c70574bb7298aa401d78c0","registered":"1129991594","dob":"716892742","phone":"(429)-446-7246","cell":"(648)-377-8894","SSN":"325-61-6120","picture":{"large":"http://api.randomuser.me/portraits/women/33.jpg","medium":"http://api.randomuser.me/portraits/med/women/33.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/33.jpg"},"version":"0.6","nationality":"US"}}]
                },
                {
                    "organization" : "周鸿祎的360",
                    "id" : 1727272,
                    "users" : [{"user":{"gender":"male","name":{"title":"mr","first":"tommy","last":"stanley"},"location":{"street":"5251 station road","county":"kildare","state":"michigan","zip":"81572"},"email":"tommy.stanley95@example.com","username":"lazygorilla313","password":"&amp;","salt":"DD5UcgD3","md5":"2155c170ed25a160f6202289bbb26aa5","sha1":"08d8a9272c02cf04ca91502156e3382c5393b4e1","sha256":"1d96aba82ee2d70ab4c09ba3a5bdeab7499143e740924e239d76fccafc299115","registered":"1182422920","dob":"986003528","phone":"071-795-0091","cell":"081-127-4151","PPS":"8761806T","picture":{"large":"http://api.randomuser.me/portraits/men/15.jpg","medium":"http://api.randomuser.me/portraits/med/men/15.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/15.jpg"},"version":"0.6","nationality":"IE"},"seed":"ccfb395bd154809f05"},{"user":{"gender":"female","name":{"title":"miss","first":"rose","last":"gregory"},"location":{"street":"5638 denny street","county":"donegal","state":"connecticut","zip":"87034"},"email":"rose.gregory66@example.com","username":"bigtiger841","password":"redhead","salt":"Pii33pqL","md5":"ea3043ea9b36202218760e1e20c1a698","sha1":"dd38287733289745b81c9f132c40dd14bc3b7e1d","sha256":"f4c745bd9af6d19bf64ea40ba1461a7443e9fcd91df11635570c34ce4c0fa771","registered":"1225817453","dob":"946403496","phone":"021-686-6277","cell":"081-578-3583","PPS":"8607168T","picture":{"large":"http://api.randomuser.me/portraits/women/82.jpg","medium":"http://api.randomuser.me/portraits/med/women/82.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/82.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"gilbert","last":"jennings"},"location":{"street":"5801 o'connell street","county":"dún laoghaire–rathdown","state":"indiana","zip":"39404"},"email":"gilbert.jennings17@example.com","username":"brownpanda771","password":"cecile","salt":"1obuFJot","md5":"b9cec0adf70102f2f2864babd802c52c","sha1":"6f38fc8fe8fc24688f40cb36d9deaeaddf6342ee","sha256":"72d3b4199b7e5ec07388ce7b1fe250c1b4c7b89331dd433daa01409b4e3946a9","registered":"1412592435","dob":"303641620","phone":"011-280-5054","cell":"081-101-8479","PPS":"9825189T","picture":{"large":"http://api.randomuser.me/portraits/men/2.jpg","medium":"http://api.randomuser.me/portraits/med/men/2.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/2.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"alexander","last":"howell"},"location":{"street":"6676 mill road","county":"limerick","state":"california","zip":"50326"},"email":"alexander.howell89@example.com","username":"crazypanda484","password":"ncc1701a","salt":"cSQ9stxf","md5":"1e27d0c330372b8dc2e88dc6f34d9ebf","sha1":"c5ac1af9831f9d2bd4f6f4a54374f0b4d6055447","sha256":"1958dc5e8d42a7f1ab652591ff5be2a5ab6d13ff41e3f607c70594e6981ba841","registered":"1329755694","dob":"1062450998","phone":"041-809-5573","cell":"081-513-1057","PPS":"6067438T","picture":{"large":"http://api.randomuser.me/portraits/men/73.jpg","medium":"http://api.randomuser.me/portraits/med/men/73.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/73.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"mrs","first":"eliza","last":"perry"},"location":{"street":"6037 manor road","county":"offaly","state":"arkansas","zip":"23814"},"email":"eliza.perry64@example.com","username":"browndog567","password":"yoyoma","salt":"2llKzuuN","md5":"c9b82b35a31e2b117fd8fe296af9a436","sha1":"b119844b50f125357bcb1302e63928115ac81681","sha256":"8a8a906f0b5e2ae06ea0802b5bd8d99e22cab3b5a89152e3516cd63c0cb8b00e","registered":"1404687891","dob":"74043539","phone":"041-241-4835","cell":"081-531-1457","PPS":"0150617T","picture":{"large":"http://api.randomuser.me/portraits/women/22.jpg","medium":"http://api.randomuser.me/portraits/med/women/22.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/22.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"mrs","first":"leah","last":"gregory"},"location":{"street":"5326 ormond quay","county":"carlow","state":"maryland","zip":"87694"},"email":"leah.gregory18@example.com","username":"redgorilla126","password":"bonita","salt":"kHLwwuW2","md5":"99561739ed756ef2bd633f7c22d5db77","sha1":"b17513b7b760a6aa5ca927995bead670ddf9f3b2","sha256":"36e2b4d69f3ae141107f61a927979ecc5f0529dbd6df5e8b18af9e68e026cd44","registered":"921307964","dob":"877147222","phone":"051-442-1900","cell":"081-569-9430","PPS":"7432368T","picture":{"large":"http://api.randomuser.me/portraits/women/75.jpg","medium":"http://api.randomuser.me/portraits/med/women/75.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/75.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"miss","first":"catherine","last":"lee"},"location":{"street":"6291 albert road","county":"wexford","state":"delaware","zip":"31272"},"email":"catherine.lee87@example.com","username":"bluebear606","password":"sunny1","salt":"BC1npzU1","md5":"78a29d0a21a66bb3e816d96ddb896c47","sha1":"d075ed0a623ab3260cbaf8cc593940e068aef302","sha256":"499160a981f7d226998b496b8740c77d96028e973e4527c0c5a0f1923a4891d3","registered":"1220159329","dob":"303805352","phone":"071-070-9555","cell":"081-312-6245","PPS":"3181391T","picture":{"large":"http://api.randomuser.me/portraits/women/50.jpg","medium":"http://api.randomuser.me/portraits/med/women/50.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/50.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"ms","first":"amelia","last":"obrien"},"location":{"street":"9199 pearse street","county":"cavan","state":"kansas","zip":"65339"},"email":"amelia.obrien61@example.com","username":"greenswan568","password":"harpoon","salt":"ueeNM4OL","md5":"76111906ba52da4ef50ac73871fa0da1","sha1":"2a6bba766f704e7610bf8466ea43b7dd80e1acdc","sha256":"cdefb0bf94e927a8fe3f44a174633f36faeab60607ff569283f6d39bdb34d61c","registered":"1190016661","dob":"1251311431","phone":"031-178-2700","cell":"081-522-2853","PPS":"6182689T","picture":{"large":"http://api.randomuser.me/portraits/women/40.jpg","medium":"http://api.randomuser.me/portraits/med/women/40.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/40.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"female","name":{"title":"miss","first":"fiona","last":"may"},"location":{"street":"8748 station road","county":"limerick","state":"arkansas","zip":"33501"},"email":"fiona.may57@example.com","username":"crazyostrich725","password":"rubber","salt":"dGs7TZdI","md5":"9a35923e434be652e5441a2c49509dc6","sha1":"f94b45a37457c7c6582e7ee5789641c58e48c68e","sha256":"88609a0968f7bf8d95ec56212696d7962eefd0b723aedd3a69c42c2478784f04","registered":"1197964916","dob":"210212077","phone":"011-640-9701","cell":"081-474-8054","PPS":"5119526T","picture":{"large":"http://api.randomuser.me/portraits/women/1.jpg","medium":"http://api.randomuser.me/portraits/med/women/1.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/women/1.jpg"},"version":"0.6","nationality":"IE"}},{"user":{"gender":"male","name":{"title":"mr","first":"earl","last":"banks"},"location":{"street":"5035 ormond quay","county":"limerick","state":"hawaii","zip":"55569"},"email":"earl.banks94@example.com","username":"organickoala180","password":"1966","salt":"RclxfBaU","md5":"8071292ec92ad705c6be09b573d8bd8c","sha1":"9bdf901a581bf153054b56e3ab02bf1457aa0b1f","sha256":"bb14430710b45d1b72ec303c2bf529a79abae1e411d9c65205220c47061cd190","registered":"1336596882","dob":"535265745","phone":"031-142-5899","cell":"081-285-1416","PPS":"5891844T","picture":{"large":"http://api.randomuser.me/portraits/men/26.jpg","medium":"http://api.randomuser.me/portraits/med/men/26.jpg","thumbnail":"http://api.randomuser.me/portraits/thumb/men/26.jpg"},"version":"0.6","nationality":"IE"}}]
                }
            ]
        };
            var organizations = responseData.results,
                length = organizations.length,
            //4个组织机构
                dataBlob = {},
                sectionIDs = [],
                rowIDs = [],
                organization,
                users,
                userLength,
                user,
                i,
                j;

            for (i = 0; i < length; i++) {
                //某个组织机构的所有信息organization
                organization = organizations[i];

                sectionIDs.push(organization.id);
                //片段id为 12348124 内容为 ：马云的淘宝
                dataBlob[organization.id] = organization.organization;

                users = organization.users;//某个组织的所有用户
                userLength = users.length;//该组织一共有多少人？

                rowIDs[i] = [];//rowIDs是一个二维数组

                for(j = 0; j < userLength; j++) {
                    user = users[j].user;
                    rowIDs[i].push(user.md5);//二维数组放的都是 md5

                    dataBlob[organization.id + ':' + user.md5] = user;
                }
            }

            this.setState({
                dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
                loaded     : true
            });


    }









}


const styles = StyleSheet.create({

    loadingpage:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    container: {
        flex: 1
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        flexDirection: 'column',
        paddingTop: 25
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    text: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16
    },
    rowStyle: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },
    rowText: {
        color: '#212121',
        fontSize: 16
    },
    subText: {
        fontSize: 14,
        color: '#757575'
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 6,
        backgroundColor: '#2196F3'
    }



});

module.exports=HomeUI;
