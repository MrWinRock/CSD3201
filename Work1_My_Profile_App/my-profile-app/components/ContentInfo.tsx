import { Text, View } from "react-native";
import styles from "../style/styles";

interface InfoProps {
    infos: { title: string; content: string }[];
}

export default function ContentInfo({ infos }: InfoProps) {
    return (
        <>
            {infos.map((info, index) => (
                <View style={styles.info} key={index}>
                    <Text style={styles.textInfoBold}>{info.title} </Text>
                    <Text style={styles.textInfo}>{info.content}</Text>
                </View>
            ))}
        </>
    );
}