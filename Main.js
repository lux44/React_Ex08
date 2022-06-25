import React,{Component} from "react";
import { View, Text, FlatList, StyleSheet,TouchableOpacity, uri, Image,Alert } from "react-native";

export default class Main extends Component{

    // 화면 갱신에 영향을 미치는 아주 특벼한 변수 state
    state={
        datas:['aaa','bbb','ccc','ddd'],

        // 조금 더 복잡한 구조의 데이터들
        datas2:[
            {name:'sam', message:'Hello world', img:require('./img/bg_one01.jpg')},
            {name:'robin', message:'Hello rn', img:require('./img/bg_one02.jpg')},
            {name:'lee', message:'Hello ios', img:require('./img/bg_one03.jpg')},
            {name:'park', message:'Hello android', img:require('./img/bg_one04.jpg')},
            {name:'rosa', message:'Hello web', img:require('./img/bg_one05.jpg')},
            {name:'hong', message:'Hello hybrid', img:require('./img/bg_one06.png')},
            {name:'choi', message:'Hello aaa', img:require('./img/bg_one07.jpg')},
            {name:'kim', message:'Hello bbb', img:require('./img/bg_one08.jpg')},
            {name:'chae', message:'Hello ccc', img:require('./img/bg_one09.jpg')},
            {name:'abc',message:'dkdk',img:{uri:'https://cdn.pixabay.com/photo/2022/06/02/11/13/cathedral-7237718_1280.jpg'}}
        ]
    }

    render(){
        return(
            <View style={style.root}>
                <Text style={style.titleText}>FlatList TEST</Text>

                {/* RN에서는 RecyclerView의 역할을 하는 Component가 2가지 있음. */}
                {/* 1. FlatList - 일반적인 리스트 뷰의 형태 */}
                {/* 2. SectionList - 섹션에 따라 구분 지어서 리스트 할 때 사용(잘 사용하지 않음) 수업 안함*/}

                {/* FlatList 컴포넌트 */}
                {/* 필수 속성 2가지 */}
                {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)을 만들어서 리턴하는 콜백함수 지정 */}
                {/* renderItem 속성에 지정한 함수는 data 속성에 지정한 배열의 개수만큼 호출됨 */}
                {/* <FlatList
                    data={this.state.datas}
                    renderItem={(obj)=>{
                        // 파라미터 : 위 data 속성으로 지정한 배열의 요소(item == value)와 각 요소의 index 번호를 멤버로 가진 객체 1개가 전달됨.
                        return <Text>{obj.item} - {obj.index}</Text>}
                        }>

                </FlatList> */}

                {/* <FlatList
                    data={this.state.datas}
                    renderItem={({index, item})=>{
                        // 파라미터 : 위 data 속성으로 지정한 배열의 요소(item == value)와 각 요소의 index 번호를 멤버로 가진 객체 1개가 전달됨.
                        // obj 를 구조분해할당 하여 사용하기
                        // const {item, index}=obj
                        // 아이템이 터치될 수 있도록 Touchable~~~
                        return (
                            <TouchableOpacity style={style.itemView} onPress={()=>{alert(index)}}>
                                <Text>번호 : {index}</Text>
                                <Text>값 : {item}</Text>
                            </TouchableOpacity>
                        )}
                        }>

                </FlatList> */}
                {/* renderItem의 콜백 함수 파라미터 객체를 받을 때 '구조분해할당'이라는 기법을 더 선호함. */}

                <FlatList
                    data={this.state.datas2}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity style={style.item} onPress={()=>{Alert.alert(item.name)}}>
                                <Image source={item.img} style={style.itemImg}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMsg}>{item.message}</Text>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    }}>
                    
                </FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
        color:'black',
    },
    itemView:{
        borderWidth:1,
        borderRadius:4,
        margin:8,
        padding:8,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    }
})