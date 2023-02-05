package DataStructures;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;

public class MapHelper<K, V> {

  public static<K,V> V get(Map61B<K, V> map, K k){
    if(map.containsKey(k)){
      return map.get(k);
    }
    return null;
  }

  /*Return max of all keys. Works only if x and y have comparable data */
  public static<K extends Comparable<K>, V> K maxKey(Map61B<K, V> map){
    List<K> keys = map.keys();
    K max_key = keys.get(0);
    for(int i = 1; i < keys.size(); ++i){
      if(max_key.compareTo(keys.get(i)) < 0){
        max_key = keys.get(i);
      }
    }
    return max_key;
  }

  @Test
  public void testGet(){
    Map61B<String, Integer> m = new ArrayMap<>();
    m.put("horse", 3);
    m.put("fish", 9);
    m.put("house", 10);

    Integer actual = MapHelper.get(m, "fish");
    Integer expected = 9;
    assertEquals(expected, actual);
    assertEquals(null, MapHelper.get(m, "aabsjasgdajs"));
  }

  @Test
  public void testMaxKey(){
    Map61B<String, Integer> m = new ArrayMap<>();
    m.put("horse", 3);
    m.put("fish", 9);
    m.put("house", 10);

    String actual = MapHelper.maxKey(m);
    String expected = "house";
    assertEquals(expected, actual);
  }
}
