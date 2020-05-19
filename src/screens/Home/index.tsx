import React, { FC } from 'react';
import {StyleSheet, Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import Header from '../../Components/header';
import HomeScreenHeader from '../../Components/homeHeader'
import HomescreenText from '../../Components/HomeText'

export default function Home(){
    const headerText = "Welcome";
    const text = 'The TODO app lets a user create, read, update and delete to-do tasks. Completed tasks can be deleted at once.';
    return (
        <View>
        <HomeScreenHeader headerText={headerText} image={require('../../assets/logo.png')} />
        <ScrollView>
        <HomescreenText text={'Quis enim inhaerendo iis, quae in optimo ordine constituta videat divina dispensatione dirigi: assidua eorum contemplatione et quadam consuetudine non provocetur ad optima, admireturque Opificem omnium, in quo tota felicitas est et omne bonum?'} />
        <HomescreenText text={'Quis enim inhaerendo iis, quae in optimo ordine constituta videat divina dispensatione dirigi: assidua eorum contemplatione et quadam consuetudine non provocetur ad optima, admireturque Opificem omnium, in quo tota felicitas est et omne bonum?'} />
        <HomescreenText text={'Quis enim inhaerendo iis, quae in optimo ordine constituta videat divina dispensatione dirigi: assidua eorum contemplatione et quadam consuetudine non provocetur ad optima, admireturque Opificem omnium, in quo tota felicitas est et omne bonum?'} />
        <HomescreenText text={'Quis enim inhaerendo iis, quae in optimo ordine constituta videat divina dispensatione dirigi: assidua eorum contemplatione et quadam consuetudine non provocetur ad optima, admireturque Opificem omnium, in quo tota felicitas est et omne bonum?'} />
        <HomescreenText text={'Quis enim inhaerendo iis, quae in optimo ordine constituta videat divina dispensatione dirigi: assidua eorum contemplatione et quadam consuetudine non provocetur ad optima, admireturque Opificem omnium, in quo tota felicitas est et omne bonum?'} />
        </ScrollView>
        </View>
    );
};



