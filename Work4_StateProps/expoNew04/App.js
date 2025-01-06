import { ScrollView } from "react-native";
import Docs from "./docs/Docs";
import Works from "./works/Works";

export default function App() {
  return (
    <ScrollView>
      {/* โปรแกรมในเอกสาร */}
      <Docs />

      {/* แบบฝึกหัด */}
      <Works />
    </ScrollView>
  );
}
