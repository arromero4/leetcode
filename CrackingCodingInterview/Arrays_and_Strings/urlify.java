package CrackingCodingInterview.Arrays_and_Strings;

// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: if implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

public class urlify {
  public static void main(String[] args) {
    System.out.println(replaceSpaces("Mr John Smith ", 13));
  }

  public static String replaceSpaces(String str, int trueLength) {
    char[] charArr = str.toCharArray();
    int spaceCount = 0, index, i = 0;
    for(i = 0; i < trueLength; i++) {
      if(charArr[i] == ' ') {
        spaceCount++;
      }
    }

    index = trueLength + spaceCount * 2;
    if(trueLength < charArr.length) charArr[trueLength] = '\0';
    char[] newStr = new char[index];
    for(i =trueLength-1; i>=0; i--) {
      if(charArr[i] == ' ') {
        newStr[index -1] = '0';
        newStr[index -2] = '2';
        newStr[index -3] = '%';
      }else{
        newStr[index -1] = charArr[i];
        index--;
      }
    }
    return new String(newStr);

  }


}
