import React from 'react'

import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'

import { SkillData } from '../pages/Home';

interface SkillCArdProps extends TouchableOpacityProps {
    skill: SkillData
}

export function SkillCard({ skill, ...rest }: SkillCArdProps) {

    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            activeOpacity={0.7}
            {...rest}
        >
            <Text
                style={styles.textSkill}
            >
                {skill.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10
    },
    textSkill: {
        color: `#fff`,
        fontSize: 22,
        fontWeight: 'bold'
    }
});
