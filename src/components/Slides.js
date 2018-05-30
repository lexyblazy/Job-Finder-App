import React, { Component } from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderButton = index => {
    const { slides, onwards } = this.props;
    if (index === slides.length - 1) {
      return (
        <Button
          buttonStyle={{ marginTop: 20 }}
          title="Onwards"
          onPress={() => onwards()}
        />
      );
    }
    return;
  };

  renderSlides = () => {
    return this.props.slides.map((slide, index) => {
      return (
        <View
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderButton(index)}
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  }
});

export default Slides;
