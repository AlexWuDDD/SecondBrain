package DataStructures;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.Test;

public class Exercise{

  @Test
  public void Exercise_4_4_1(){
    List<String> wordList = getWords("./words.txt");
    assertTrue(wordList.size() == 235886);
    assertEquals("A", wordList.get(0));
    assertEquals("Zyzzogeton", wordList.get(235885));
  }

  @Test
  public void Exercise_4_4_2(){
    List<String> testStrs1 = new ArrayList<>(Arrays.asList("aaa", "bbb", "ccc"));
    List<String> testStrs2 = new ArrayList<>(Arrays.asList("aaa", "bbb", "bbb"));
    List<String> testStrs3 = new ArrayList<>(Arrays.asList("bbb", "bbb", "bbb"));

    assertEquals(3, countUniqueWords(testStrs1));
    assertEquals(2, countUniqueWords(testStrs2));
    assertEquals(1, countUniqueWords(testStrs3));
  }

  @Test
  public void Exercise_4_4_3(){
    List<String> targets = new ArrayList<>(Arrays.asList("a", "b", "c"));
    List<String> words = new ArrayList<>(Arrays.asList("a", "b", "c", "d", "b", "d", "c", "c", "c"));
    Map<String, Integer> couMap = collectWordCount(targets, words);
    assertEquals(1, couMap.get("a").intValue());
    assertEquals(2, couMap.get("b").intValue());
    assertEquals(4, couMap.get("c").intValue());
  }

  private Map<String, Integer> collectWordCount(List<String> targets, List<String> words){
    Map<String, Integer> countMap = new HashMap<>();
    for(String target: targets){
      countMap.put(target, 0);
    }
    
    for(String word: words){
      if(countMap.containsKey(word)){
        countMap.put(word, countMap.get(word)+1);
      }
    }
    return countMap;
  }

  private int countUniqueWords(List<String> strs){
    Set<String> set = new HashSet<>();
    for(String str : strs){
      set.add(str);
    }
    return set.size();
  }

  private List<String> getWords(String inputFileName){
    In fileReader = new In(inputFileName);
    List<String> list = new ArrayList<>();
    while(fileReader.hasNextLine()){
      list.add(fileReader.readLine());
    }
    return list;
  }

}