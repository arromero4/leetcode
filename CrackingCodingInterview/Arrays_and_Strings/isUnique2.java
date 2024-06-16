package CrackingCodingInterview.Arrays_and_Strings;

/**
 * isUnique
 */
public class isUnique2 {

  public static void main(String[] args) {
    String inpuString = "abcdeff";
    boolean isUnique = isUniqueChars(inpuString);
    if(isUnique){
      System.out.println(inpuString + " is unique");

    }else{
      System.out.println(inpuString + " is not unique");

    }
  }

  public static boolean isUniqueChars(String str){
    int checker = 0;
    for(int i = 0; i < str.length(); i++){
      int val = str.charAt(i) - 'a';
      if((checker & (1 << val)) > 0){
        return false;
      }
      checker |= (1 << val);

    }
    return true;
  }
}
