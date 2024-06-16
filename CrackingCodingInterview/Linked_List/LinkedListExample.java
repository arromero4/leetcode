package CrackingCodingInterview.Linked_List;
class Node {
  Node next = null;
  int data;

  public Node(int d) {
    data = d;
  }

  void appendToTail(int d) {
    Node end = new Node(d);
    Node n = this;
    while (n.next != null) {
      n = n.next;
    }
    n.next = end;
  }
}

public class LinkedListExample {
  public static void main(String[] args) {
    Node head = new Node(1);  // Crear el nodo cabeza con el valor 1
    head.appendToTail(2);     // Agregar el valor 2 al final de la lista
    head.appendToTail(3);     // Agregar el valor 3 al final de la lista
    head.appendToTail(4);     // Agregar el valor 4 al final de la lista

    // Imprimir la lista enlazada
    Node n = head;
    while (n != null) {
      System.out.print(n.data + " -> ");
      n = n.next;
    }
    System.out.print("null");
  }
}
