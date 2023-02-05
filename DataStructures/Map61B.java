package DataStructures;

import java.util.List;

public interface Map61B<K, V> {

  /**Associate key with value. */
  public void put(K key, V value);
  
  /**Checks if map contains the key. */
  public boolean containsKey(K key);
  
  /**Returns value, assuming key exists. */
  public V get(K key);
  
  /**Returns a list of all keys. */
  public List<K> keys();
  
  /**Returns number of keys. */
  public int size();
}
