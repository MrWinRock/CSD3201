import React from "react";
import Docs from "./docs/Docs";
import Works from "./works/Works";
import { ScrollView, Text } from "react-native";

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
