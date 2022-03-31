import React, { useState, useEffect } from 'react'

import {
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    FlatList,
} from 'react-native'

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export interface SkillData {
    id: string;
    name: string;
}

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 0 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }

    }, []);

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills([...mySkills, data]);
        setNewSkill('');
    }

    function handleRemoveSkill(id: string) {
        const filteredSkills = mySkills.filter(skill => skill.id !== id);

        setMySkills(filteredSkills);
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={styles.title} testID="welcome">Welcome, Marcio</Text>

            <Text style={styles.greeting}>
                {greeting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <Button
                title="Add"
                onPress={handleAddNewSkill}
            />

            <Text
                style={[styles.title, {
                    marginVertical: 50
                }]}
            >
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item?.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greeting: {
        color: "#fff",
    }
});
