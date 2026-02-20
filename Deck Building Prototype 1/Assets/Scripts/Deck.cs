using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class Deck : MonoBehaviour
{
    [Header("Deck Info")]
    [SerializeField] private string deckName;
    [SerializeField] private int maxCards = 12;

    [Header("UI")]
    [SerializeField] private TextMeshProUGUI nameLabel;

    [Header("Cards")]
    [SerializeField] private List<Card> cards = new List<Card>();

    public string DeckName => deckName;
    public int CardCount => cards.Count;
    public int MaxCards => maxCards;
    public IReadOnlyList<Card> Cards => cards;

    /// <summary>
    /// Sets the deck name and updates the TMP label on the child object.
    /// </summary>
    public void SetName(string newName)
    {
        deckName = newName;

        if (nameLabel != null)
            nameLabel.text = deckName;
        else
            Debug.LogWarning($"Deck \"{deckName}\": No nameLabel assigned. Check the prefab.");
    }

    public bool AddCard(Card card)
    {
        if (card == null)
        {
            Debug.LogWarning($"Deck \"{deckName}\": Cannot add a null card.");
            return false;
        }

        if (CardCount >= maxCards)
        {
            Debug.LogWarning($"Deck \"{deckName}\" is full ({maxCards}/{maxCards}).");
            return false;
        }

        cards.Add(card);
        return true;
    }

    public bool RemoveCard(Card card)
    {
        if (card == null || !cards.Contains(card))
        {
            Debug.LogWarning($"Deck \"{deckName}\": Card not found or null.");
            return false;
        }

        cards.Remove(card);
        return true;
    }

    public bool IsFull() => CardCount >= maxCards;

    public void Clear() => cards.Clear();
}