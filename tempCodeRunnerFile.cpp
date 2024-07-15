#include <iostream>
#include <string>
using namespace std;

struct ListNode {
    char val;
    ListNode* next;

    ListNode(char x) : val(x), next(nullptr) {}
};
int p=0,w=0,d=0;
class CircularLinkedList {
private:
    ListNode* head;

public:
    CircularLinkedList() : head(nullptr) {}

    void insert(char x) {
        ListNode* newNode = new ListNode(x);
        
        if(x == 'P') p++;
    else if(x == 'W') w++;
    else if(x == 'D') d++;
        if (head == nullptr) {
            head = newNode;
            head->next = head;
        } else {
            ListNode* temp = head;
            while (temp->next != head) {
                temp = temp->next;
            }
            temp->next = newNode;
            newNode->next = head;
        }
    }
    void processAndDeleteNodes() {
        if (head == nullptr || head->next == head) {
            return;
        }

        
        ListNode* a = head;
        ListNode* b = head->next;
        ListNode* prev = nullptr;

        while (true) {
            b=a->next;
            if (a->val != b->val) {
                ListNode* todelete = b;
                if(todelete->val=='P')p--;
                else if(todelete->val=='W')w--;
                else if(todelete->val=='D')d--;
                if (todelete == head) {
                    head = head->next;
                }
                a->next = b->next;
                delete todelete;
            } else {
                while (a->val == b->val) {
                    prev = b;
                    b = b->next;
                }
                ListNode* todelete = b;
                if(todelete->val=='P')p--;
                else if(todelete->val=='W')w--;
                else if(todelete->val=='D')d--;
                ListNode* c = b;
                if (c == head) {
                    head = head->next;
                }
                prev->next = b->next;
                delete todelete;
            }
            a = a->next;

            if ((p!=0&&w==0&&d==0)||(p==0&&w!=0&&d==0)||(p==0&&w==0&&d!=0)) {
                break;
            }
        }

        if ((p!=0&&w==0&&d==0)) {
            cout << "Particle" << endl;
        } else if ((p==0&&w!=0&&d==0)) {
            cout << "Wave" << endl;
        } else if ((p==0&&w==0&&d!=0)) {
            cout << "Dual" << endl;
        }
        p=0,w=0,d=0;
    }
};

int main() {
    int t;
    cin >> t;

    while (t--) {
        int N;
        cin >> N;
        string S;
        cin >> S;

        CircularLinkedList list;

        for (char c : S) {
            list.insert(c);
        }

        list.processAndDeleteNodes();
    }

    return 0;
}