import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Avatar from "../../components/Avatar";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { OtherColors } from "@/constants/Colors";
import { EvilIcons } from "@expo/vector-icons";

type Props = {
  data: any;
};
const Tweet = (props: Props) => {
  const renderTopText = (type: any, text: any) => {
    text += type === "retweet" ? " retweet" : " response";

    return (
      <View
        style={{
          paddingLeft: 35,
          paddingBottom: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {type === "retweet" ? (
          <EvilIcons name="retweet" size={18} color={OtherColors.dark_gray} />
        ) : (
          <MaterialCommunityIcons
            name={"message-reply"}
            size={14}
            color={OtherColors.dark_gray}
          />
        )}
        <Text style={{ marginLeft: 10, color: OtherColors.dark_gray }}>
          {text}
        </Text>
      </View>
    );
  };

  const renderBottomIcons = (name: any, text: any) => {
    let finalText = text === 0 ? null : text.toString();

    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {name === "retweet" ? (
          <EvilIcons name="retweet" size={24} color={OtherColors.dark_gray} />
        ) : (
          <MaterialCommunityIcons
            name={name}
            size={18}
            color={OtherColors.dark_gray}
          />
        )}
        <Text style={{ marginLeft: 5, color: OtherColors.dark_gray }}>
          {finalText}
        </Text>
      </TouchableOpacity>
    );
  };

  let {
    type,
    user,
    userName,
    avatar,
    time,
    message,
    comments,
    retweets,
    likes,
  } = props.data;

  return (
    <View
      style={[
        { backgroundColor: "#FFF" },
        type
          ? {
              paddingVertical: 10,
              paddingHorizontal: 15,
            }
          : { paddingBottom: 15 },
      ]}
    >
      {type === "retweet" && renderTopText(type, props.data.from)}
      {type === "responseTo" && renderTopText(type, user)}
      {type === "responseTo" && <Tweet data={props.data.original} />}
      <View style={{ flexDirection: "row" }}>
        <Avatar size={50} photo={avatar} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>{user}</Text>
              <Text style={{ paddingLeft: 5, color: OtherColors.dark_gray }}>
                {userName}
              </Text>
              <View
                style={{
                  backgroundColor: OtherColors.dark_gray,
                  marginHorizontal: 4,
                  width: 1.5,
                  height: 1.5,
                  borderRadius: 3,
                }}
              />
              <Text style={{ color: OtherColors.dark_gray }}>{time}</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              {message}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 15,
            }}
          >
            {renderBottomIcons("comment-outline", comments)}
            {renderBottomIcons("retweet", retweets)}
            {renderBottomIcons("heart-outline", likes)}
            {renderBottomIcons("share-outline", 0)}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tweet;
